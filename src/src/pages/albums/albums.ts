import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Library } from '../../library/library';

@Component({
	selector: 'page-albums',
	templateUrl: 'albums.html'
})
export class AlbumsPage {
	albums;

	constructor(public navCtrl: NavController, public navParams: NavParams, public library: Library) {
		let vm = this;

		/*library.getAlbums(null, (albums) => {
          vm.albums = albums;
        })*/

        console.error('!!!!!!!!!!!!!!!! got these params:', navParams);
	}

}
