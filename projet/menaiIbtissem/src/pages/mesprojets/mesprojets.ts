
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import "rxjs/Rx";
import {Http} from "@angular/http";
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-mesprojets',
  templateUrl: 'mesprojets.html',
})
export class MesprojetsPage {

	posts: any;
	selectionProjet: any;


  constructor(public http: Http, public navCtrl:NavController,public navParams:NavParams) {

  	  this.http.get('http://menai.chalon.codeur.online/api/api.php').map(res => res.json()).subscribe(data => {
        console.log(data);
        this.posts = data;
        this.selectionProjet = navParams.get('post'); 
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mesprojets');
  }

  projetChoisi(event, post) {
        this.navCtrl.push(ViewPage, {
          post: post
        });
      }

}
