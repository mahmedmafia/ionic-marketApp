import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavController } from '@ionic/angular';


import {ListingPage} from '../listing/listing.page.ts';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl:NavController){}
  goToListing(){
    this.navCtrl.push(ListingPage);
  }
}
