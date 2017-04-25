import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {CompetencesPage} from '../pages/competences/competences';
import { MecontacterPage } from '../pages/mecontacter/mecontacter';
import { MesprojetsPage } from '../pages/mesprojets/mesprojets';
import { EbimagePage } from '../pages/ebimage/ebimage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CompetencesPage,
   MecontacterPage,
   MesprojetsPage,
   EbimagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CompetencesPage,
    MecontacterPage,
    MesprojetsPage,
    EbimagePage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
