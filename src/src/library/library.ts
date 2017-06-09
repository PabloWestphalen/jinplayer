import { Injectable } from '@angular/core';
const path = window['require']('path');
const fs = window['require']('fs');
const mm = window['require']('musicmetadata');
const crypto = window['require']('crypto');
const Datastore = window['require']('nedb');

const electron = window['require']('electron');
const remote = electron.remote
const mainProcess = remote.require('./app');

@Injectable()
export class Library {
	db;
	count;
	albumCache;

	constructor() {
		if (!fs.existsSync(path.join(mainProcess.userData, 'cover-imgs'))){
		    fs.mkdirSync(path.join(mainProcess.userData, 'cover-imgs'));
		}


		let dbPath = path.join(mainProcess.userData, 'library.nedb');

		this.db = new Datastore({ filename: dbPath, autoload: true });
	}

	filterFilesByExtension(files, allowedExtensions) {
		var pattern = '.*\.(' + allowedExtensions.join('|') + ')';
		var expression = new RegExp(pattern,'ig');

		return files.filter(function(file) {
			return file.match(expression);
		});
	}

	getFilesInDirectory(directory, callback) {
		//console.log('Will try to read from this dir: ', directory);
		fs.readdir(directory, function(error, files) {
			if(error) {
				console.error('Error reading this dir: error');
				files = [];
			}
			callback(files);
		});
	}

	getSongMeta(songPath, callback) {
		var lib = this;

		mm(fs.createReadStream(songPath), { duration: true }, function (error, metadata) {
			if(error) {
				//console.error('Error getting this songs meta: ', error);
				metadata = {};
			}
			metadata.duration = lib.parseDuration(metadata.duration);
			callback(metadata);

		});
	}

	parseDuration(duration) {
		var minutes = Math.floor(duration / 60);
		var seconds = duration - minutes * 60;
		var minString = minutes < 0 ? "00" : minutes < 10 ? "0" + minutes : minutes;
		var secString = seconds < 0 ? "00" : seconds < 10 ? "0" + seconds : seconds;
		return minString + ":" + secString;
	}

	getSubDirectories(dir, files) {
		return files.filter(function(file) {
			return fs.lstatSync(path.join(dir, file)).isDirectory();
		});
	}

	getSongs(dir, files) {
		return this.filterFilesByExtension(files, ['mp3']);
	}

	parseSong(songPath, callback) {
		this.getSongMeta(songPath, function(data) {
			callback(data);
		});
	}

	extractCoverImage(albumDir, song) {
		let hash = this.getAlbumHash(albumDir);
		let coverPath = path.join(mainProcess.userData, 'cover-imgs', hash + '.jpg');

		if (!fs.existsSync(coverPath) && song.data && song.data.picture) {
			
			if(song.data.picture.length) {
				if(song.data.picture[0].data) {
					var coverData = song.data.picture[0].data;
					song.data.picture[0].path = coverPath;
					fs.writeFile(coverPath, coverData, 'binary', function(){});
				}
			}
		}
	}

	getAlbumHash(albumDir) {
		return crypto.createHash('md5').update(albumDir).digest('hex');
	}

	parseDirectory(rootDir, callback) {
		var totalItems = 0;
		var parsedCount = 0;
		var parsedSongs = [];

		var lib = this;

		lib.getFilesInDirectory(rootDir, function(files) {
			var subDirectories = lib.getSubDirectories(rootDir, files);
			var songs = lib.getSongs(rootDir, files);
			totalItems = subDirectories.length + songs.length;

			if(subDirectories.length == 0 && songs.length == 0) {
				callback([]);
			}

			songs.forEach(function(song) {
				var songDir = path.join(rootDir, song);
				lib.parseSong(songDir, function(parsedSong) {
					let startTime = new Date().getTime();
					parsedSong.path = songDir;

					lib.db.find({ path: songDir }, function (err, docs) {
						if(docs.length == 0) {
							//console.log('Couldnt find song [', songDir, '] in db, creating it');
							var toInsert = Object.assign({}, parsedSong);
							if(toInsert.picture) {
								toInsert.picture.forEach(function(picture) {
									delete picture.data;
								})
							}

							lib.db.insert(toInsert);
							//console.log('Added ', toInsert, ' to db');
						} else {
							//console.log('Found [', songDir, '] in db, not inserting it...');
						}
					});

					parsedSongs.push({path: songDir, data: parsedSong});
					parsedCount++;
					//console.log('On the dir', rootDir, 'Theres a total items to parse: ', totalItems, ', currently parsed: ', parsedCount);
					//console.log('Took me ', (new Date().getTime() - startTime), 'miliseconds to process', parsedSong.title);
					if(parsedCount == totalItems) {
						if(subDirectories.length == 0) {
							//console.error('Time to extract cover image for', rootDir, 'will pass this as parameter: ', parsedSongs[0]);
							console.error('!!!!!!!!!!!!Completely parsed!!!!!!!!', rootDir);
							lib.extractCoverImage(rootDir, parsedSongs[0]);
						}

						callback(parsedSongs);
					}
				});
			});

			subDirectories.forEach(function(dir) {
				lib.parseDirectory(path.join(rootDir, dir), function(subParsedSongs) {
					parsedCount++;
					parsedSongs = parsedSongs.concat(subParsedSongs);
					//console.log('On the dir', rootDir, 'Theres a total items to parse: ', totalItems, ', currently parsed: ', parsedCount);
					if(parsedCount == totalItems) {
						callback(parsedSongs);
					}

				});
			});
		});
	}


	getArtists(callback) {
		var lib = this;
		lib.db.find({}, (err, docs) => {
			var artists = Object.keys(lib.groupBy(docs, 'artist'));
			callback(artists);
		});
	}

	getAlbums(artist, callback) {
		var lib = this;
		var query = {};

		if(artist) {
			query['artist'] = artist;
		}

		lib.db.find(query, (err, docs) => {
			var albums = Object.keys(lib.groupBy(docs, 'album'));
			callback(albums);
		});
	}

	getAlbumSongs(artist, album): Promise<any> {
		var lib = this;

		return new Promise((resolve, reject) => {
			lib.db.find({album: album, artist: artist}).sort({"track.no": 1}).exec((err, songs) => {
				resolve(songs);
			});
		})
	}

	getAlbumCover(album): Promise<any> {
		//console.log('Get album cover started with this album: ', album);
		var lib = this;
		let cover;

		return new Promise((resolve, reject) => {
			lib.db.find({album: album}).limit(1).exec((err, referenceSong) => {
				//console.log('getAlbumCover got this reference song: ', referenceSong);

				if(referenceSong.length) {
					//console.log('getAlbumCover got this album directory: ', path.dirname(referenceSong[0].path));
					//console.log('getAlbumCover created this cover path', path.join(path.dirname(referenceSong[0].path), 'cover.jpg'));
					let hash = lib.getAlbumHash(path.dirname(referenceSong[0].path));
					//console.log('calculated hash to ', hash);

					let cover = path.join(mainProcess.userData, 'cover-imgs', hash + '.jpg');

					//console.log('calculated cover to', cover);
					if (fs.existsSync(cover)) {
						resolve(hash + '.jpg');
					} else {
						resolve(null);
					}
				}
			});
		});
	}

	getAlbumsAsync(artist): Promise<any> {
		let lib = this;
		return new Promise((resolve, reject) => {
			let query = {};
			if(artist) {
				query['artist'] = artist;
			}
			lib.db.find(query, (err, docs) => {
			var albums = Object.keys(lib.groupBy(docs, 'album'));
				resolve(albums);
			});
		});
	}

	groupBy = function(xs, key) {
	  return xs.reduce(function(rv, x) {
	    (rv[x[key]] = rv[x[key]] || []).push(x);
	    return rv;
	  }, {});
	};

	initializeLibrary(rootDir, callback) {
		var lib = this;
		console.log('Trying to initialize library at folder', mainProcess.libDir);
		console.log('Loaded the database to ', this.db);

		lib.parseDirectory(mainProcess.libDir, function() {
        	lib.db.count({}, function(err, count) {
				if(err) {
					console.log('Failed to count db entries with ', err);
				}
				console.error('set lib count to', count);
				lib.count = count;	
				lib.db.find({}, function(err, docs) {
					lib.albumCache = docs;
					callback();
				});
			});

      	});
	}
}
