import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class APIData {

  coins: any;

  constructor() {
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

}
