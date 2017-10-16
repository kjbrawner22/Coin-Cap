import { Component, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites'
import { InfoPage } from '../pages/info/info'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;
  data: any;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public http: HttpClient) {
    this.initializeApp();
    this.APIDataRetrieval();

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Favorites', component: FavoritesPage},
      {title: 'Info', component: InfoPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  APIDataRetrieval() {
    this.http.get("https:api.coinmarketcap.com/v1/ticker/").subscribe(
      data => {
        //JSON Response
        this.data = data;
        console.log(data);
      },
      err => {
        console.log("error");
      }
    );
  }
}