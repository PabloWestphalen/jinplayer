import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Library } from '../../library/library';
import { AlbumPage } from '../album/album';
import { NgZone } from '@angular/core';

@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html'
})

export class ArtistsPage {
  artists = [];
  lib;
  albums = [];
  nav;

  constructor(public navCtrl: NavController, public navParams: NavParams, public library: Library, zone: NgZone) {

    let vm = this;

    vm.nav = navCtrl;
    vm.lib = library;

    if(!navParams.data.artist) {

      zone.run(() => {
        library.getArtists((artists) => {
          vm.artists = artists;
          artists.forEach(function(artist) {
            vm.loadAlbums(artist);
          });
        });
      });

    } else {
      let vm = this;
      let artist = navParams.data.artist;

      vm.artists.push(artist);
      vm.loadAlbums(artist);
    }
    
  }

  loadAlbums(artist) {
    let vm = this;

    vm.lib.getAlbumsAsync(artist).then((albums) => {
      //console.log('my then function will add these albums', albums, 'to', artist);

      albums.forEach(function(album) {
        vm.lib.getAlbumCover(album).then((cover) => {
          //console.log('Got this cover: ', cover);
          //album['cover'] = cover;
          if(!vm.albums[artist]) {
            vm.albums[artist] = [];
          }
          
          vm.albums[artist].push({name: album, cover: cover});

          //console.log('vm.albums final now is ', vm.albums);

        });
      });

      //console.log('vm.albums somewhat-final now is ', vm.albums);
    });
  }

  openAlbum(artist, album) {
    this.nav.setRoot(AlbumPage, {artist: artist, album: album});
  }

}