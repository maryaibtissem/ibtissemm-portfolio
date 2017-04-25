import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


/*
  Generated class for the Mecontacter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mecontacter',
  templateUrl: 'mecontacter.html'
})
export class MecontacterPage {
    
    text: string;

    todo = {
    mail:'',
    sujet:'',
    message:'',
    contact:''
    };
    

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {}
     

  ionViewDidLoad() {
    console.log('ionViewDidLoad MecontacterPage');
  }

    logForm(form) {
        this.http.get('http://menai.chalon.codeur.online/api/api.php?sujet='+ form.value.sujet + '&mail=' + form.value.mail + '&message=' + form.value.message + '&contact=true').map(res => res.json()).subscribe(data => {
        this.text=data;});
    }
}



