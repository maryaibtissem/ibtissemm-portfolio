import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MecontacterPage } from '../mecontacter/mecontacter';
import { CompetencesPage } from '../competences/competences';
import { MesprojetsPage } from '../mesprojets/mesprojets';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	contact = MecontacterPage;
	competences = CompetencesPage;
	projets = MesprojetsPage;
  constructor(public navCtrl: NavController) {

  }

}
