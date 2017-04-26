import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MecontacterPage } from '../pages/mecontacter/mecontacter';
import { CompetencesPage } from '../pages/competences/competences';
import { MesprojetsPage } from '../pages/mesprojets/mesprojets';
import { ViewPage } from '../pages/view/view';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MecontacterPage,
    CompetencesPage,
    MesprojetsPage,
    ViewPage
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MecontacterPage,
    CompetencesPage,
    MesprojetsPage,
    ViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
