import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';


import { APIData } from '../../services/apidata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: any;

  constructor(public navCtrl: NavController, public apidata: APIData, public loadCtrl: LoadingController, public toastCtrl: ToastController) { }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    this.coins = this.apidata.APIDataRetrieval(this.toastCtrl, this.loadCtrl);
}

  doRefresh(refresher) {
    this.coins = this.apidata.APIDataRetrieval(this.toastCtrl);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  coinSelected(coin) {
    
  }

  onInput(ev: any) {
    // Reset items back to all of the items
    this.coins = this.apidata.getCoins();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.coins = this.coins.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                (item.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

}
