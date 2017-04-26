import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
 selectionProjet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 this.selectionProjet = navParams.get('post'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad View');
  }

}
