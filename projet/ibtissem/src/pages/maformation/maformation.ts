import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Maformation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-maformation',
  templateUrl: 'maformation.html'
})
export class MaformationPage {
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
     

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaformationPage');
  }


}