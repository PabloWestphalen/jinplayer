/*
TODO

* add search
* add player controls
* add playlist functionality, clicking a song from an album plays the next songs in the album
* tidy all files
* rewrite database format OR prettify ajax querying
* increase library initialize performance

*/

import { Component, ViewChild } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController, Nav } from 'ionic-angular';
import { Library } from '../library/library';
import { ArtistsPage } from '../pages/artists/artists';
import { AlbumPage } from '../pages/album/album';
import { NgZone } from '@angular/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  artists;
  library;
  albums = [];
  activeArtist;
  currentSong;
  selectedTrack;
  audio;

  rootPage:any = ArtistsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              loadingCtrl: LoadingController,
              zone: NgZone,
              library: Library,
              events: Events,
              ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      let vm = this;
      let directory = 'D:\\Music\\toparse';

      vm.library = library;

      let loading = loadingCtrl.create({
        content: 'Initializing library..'
      });

      loading.present();



      library.initializeLibrary(directory, () => {
        loading.dismiss();

        library.getArtists((artists) => {
          zone.run(() => {
            vm.artists = artists.sort().map(function(artist) {return {name: artist}});

            artists.forEach(function(artist) {
              library.getAlbumsAsync(artist).then((albums) => {
                vm.albums[artist] = albums.sort();
              });
            });
          })
        })
      });
    });

    this.audio = new window['Audio']();

    events.subscribe('song:selected', (song) => {
      this.currentSong = song;
      this.audio.src = "/song?path=" + song.path;
      this.audio.load();
      this.audio.play();
    });    
  }

  showArtistAlbums(name) {
    var artist = this.artists.filter(function(aa) { return aa.name == name})[0];

    if(artist) {

      if(artist['toggled']) {
        artist['toggled'] = !artist['toggled'];
      } else {
        artist['toggled'] = true;
      }

    }
    
    this.nav.setRoot(ArtistsPage, {artist: artist.name});
  }

  openAlbum(artist, album) {
   this.nav.setRoot(AlbumPage, {artist: artist, album: album});
  }

  checkActiveArtist(name) {
    var artist = this.artists.filter(function(aa) { return aa.name == name})[0];    
    return artist['toggled'] ? true : false;
  }

}
