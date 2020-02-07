import { ActivatedRoute } from '@angular/router';
import { MarketService, Product, Category } from './../services/market.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  item: Product;
  categoryName;
  productId;
  categoryId;
  Category: Category;
  constructor(private marketServ: MarketService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      console.log(res);
      this.categoryName = res.category;
      this.productId = res.id;
      this.marketServ.getMarket().subscribe(res => {
        this.Category = res.find(res => res.name == this.categoryName);
        this.item = this.Category.products.find(res => res.id == this.productId);
        console.log(this.Category);
        console.log(this.item);
      });
    });

  }

}
