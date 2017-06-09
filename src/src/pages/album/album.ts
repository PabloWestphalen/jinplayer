import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Library } from '../../library/library';

@Component({
	selector: 'page-albums',
	templateUrl: 'album.html'
})
export class AlbumPage {
	artist;
	album;
	songs;
	evt;

	constructor(public navCtrl: NavController, public navParams: NavParams, public library: Library, public events: Events) {
		let vm = this;

        vm.artist = navParams.data.artist;
        vm.album = navParams.data.album;
        vm.evt = events;

        library.getAlbumSongs(vm.artist, vm.album).then((songs) => {
        	vm.songs = songs;
        });

        
        console.error('!!!!!!!!!!!!!!!! got these params:', navParams);
	}

	playSong(song) {
		this.evt.publish('song:selected', song);
	}
}
