import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import "rxjs/Rx";
import { EbimagePage } from '../ebimage/ebimage';


import {Http} from "@angular/http";

/*
  Generated class for the Mesprojets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mesprojets',
  templateUrl: 'mesprojets.html'
})
export class MesprojetsPage {

posts: any;

selectionProjet: any;

ebimage =  EbimagePage;
 
constructor(public http: Http, public navCtrl:NavController,public navParams:NavParams ) {
	
 
    this.http.get('http://menai.chalon.codeur.online/api/api.php').map(res => res.json()).subscribe(data => {
        console.log(data);
        this.posts = data;
        this.selectionProjet = navParams.get('post'); 
});
    
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MesprojetsPage');
  }

projetChoisi(event, post) {
        this.navCtrl.push(EbimagePage, {
          post: post
        });
      } 

}
