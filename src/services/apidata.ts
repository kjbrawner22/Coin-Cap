import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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

  APIDataRetrieval() {
    this.http.get("https:api.coinmarketcap.com/v1/ticker/").subscribe(
      data => {
        //JSON Response
        var d = new Date();
        //only allow 6 updates per minute
        if(this.lastUpdate != null) {
          if (this.lastUpdate.getDate() != d.getDate() || this.lastUpdate.getTime() < d.getTime() + 10000) {
            this.setCoins(data);
            this.lastUpdate = d;
            console.log(this.getCoin(0));
          } else {
            console.log("too short of update time");
          }
        }
      },
      err => {
        console.log("error");
      }
    );
  }

}
