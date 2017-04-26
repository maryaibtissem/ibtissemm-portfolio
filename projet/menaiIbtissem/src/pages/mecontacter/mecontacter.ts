import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-mecontacter',
  templateUrl: 'mecontacter.html',
})
export class MecontacterPage {

	text: string;

    todo = {
    mail:'',
    sujet:'',
    message:'',
    contact:''
    };

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mecontacter');
  }

  logForm(form) {
        this.http.get('http://menai.chalon.codeur.online/api/api.php?sujet='+ form.value.sujet + '&mail=' + form.value.mail + '&message=' + form.value.message + '&contact=true').map(res => res.json()).subscribe(data => {
        this.text=data;});
    }
}


