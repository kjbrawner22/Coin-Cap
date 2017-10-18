import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoadingController } from 'ionic-angular';

@Injectable()
export class APIData {

  coins: any;
  lastUpdate: Date;

  constructor(public http: HttpClient) {
    this.coins = [""];
  }

  setCoins(coins) {
    for(let i in coins) {
      this.coins[i] = coins[i];
    }
  }

  getCoins() {
    return this.coins;
  }

  getCoin(index) {
    return this.coins[index];
  }

  APIDataRetrieval(toastCtrl, loadCtrl?: LoadingController) {
    if (loadCtrl != null) {
      const loading = loadCtrl.create({
      content: 'Loading Data...'
      });

      loading.present();
    }
    this.http.get("https:api.coinmarketcap.com/v1/ticker/").subscribe(
      data => {
        //JSON Response
        this.setCoins(data);
      },
      err => {
        console.log("error");
        const toast = toastCtrl.create({
          message: 'An Error Occurred While Trying to Receive Data',
          duration: 3000,
        });
        toast.present();
      }
    );
    if (loadCtrl != null) {
      loading.dismiss();
    }
    return this.coins;
  }

}
