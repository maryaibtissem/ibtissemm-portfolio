import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-competences',
  templateUrl: 'competences.html',
})
export class CompetencesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Competences');
  }

}
