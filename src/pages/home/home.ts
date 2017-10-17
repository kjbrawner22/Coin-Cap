import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { APIData } from '../../services/apidata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: any;

  constructor(public navCtrl: NavController, public apidata: APIData) {
      apidata.APIDataRetrieval();
      this.coins = [""];
      console.log(this.coins = apidata.getCoins());
      console.log("coins is defined");
  }

  onUpdate() {
    this.apidata.APIDataRetrieval();
    this.coins = apidata.getCoins();
  }

  ionViewDidEnter() {
    if (this.coins == null) {
      coins = [""];
    } else {
      coins = this.apidata.getCoins()
    }
  }

}
