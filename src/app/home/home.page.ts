import { MarketService, Category } from './../services/market.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingPage } from '../listing/listing.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  categories:Category[];
  constructor(public navCtrl:NavController,private marketServ:MarketService){}
  goToListing(...args:[]){
    let newRoute='';

    args.forEach(arg=>{
      if(newRoute.length>1){
        newRoute += '&&q=' + arg;

      }else{
        newRoute+='?q='+arg;
      }
    });
    this.navCtrl.navigateForward('listing'+newRoute);
  }
  ngOnInit(): void {
    this.marketServ.getMarket().subscribe(res=>{
     this.categories=res;
    });
    console.log('hi');
  }
}
