import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { APIData } from '../services/apidata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: any;

  constructor(public navCtrl: NavController, apidata: APIData) {
      this.coins = apidata.getCoins();
  }

}
