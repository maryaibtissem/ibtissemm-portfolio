import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CompetencesPage } from '../competences/competences';
import { MaformationPage } from '../maformation/maformation';
import { MesprojetsPage } from '../mesprojets/mesprojets';


import * as $ from 'jquery';



@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

tabBarElement:any;
formation=MaformationPage;
competences= CompetencesPage;
projets = MesprojetsPage;

constructor(public navCtrl: NavController) {
this.tabBarElement = document.querySelector('.tabbarr') ; 
   
 setTimeout(() => {
$('#nom').animate({top: '20%'},1000);}, 1000); 
    
  
}

 ionViewWillEnter(){
        this.tabBarElement.style.display='none';
        
    }  

}