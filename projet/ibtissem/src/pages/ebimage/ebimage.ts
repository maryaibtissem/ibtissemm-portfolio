import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Ebimage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ebimage',
  templateUrl: 'ebimage.html'
})
export class EbimagePage {

    selectionProjet: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      
     this.selectionProjet = navParams.get('post'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EbimagePage');
  }

}
