import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { APIData } from '../../services/apidata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: any = [""];

  constructor(public navCtrl: NavController, apidata: APIData) {
      apidata.APIDataRetrieval();
      while(apidata.getCoins() == null) {}
      console.log(this.coins = apidata.getCoins());
      console.log("coins is defined");
  }

}
