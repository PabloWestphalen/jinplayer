import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ArtistsPage } from '../pages/artists/artists';
import { AlbumPage } from '../pages/album/album';

import { Library } from '../library/library';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicAudioModule } from 'ionic-audio';


@NgModule({
  declarations: [
    MyApp,
    AlbumPage,
    ArtistsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlbumPage,
    ArtistsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Library,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
