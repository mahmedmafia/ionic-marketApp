import { Category } from './market.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private http: HttpClient) { }
   selectedProduct: Product;
   selectedCategory;
  categoreisUrl = 'https://5bcce576cf2e850013874767.mockapi.io/task/categories';
  getMarket() {
    return this.http.get<Category[]>(this.categoreisUrl).pipe(map((res: Category[]) => {
      return res.map((res: Category) => {
        return {
          ...res
        }
      });
    }));
  }
  getCategory(id) {
    return this.http.get<Category>(this.categoreisUrl + '/' + id);

  }
  setProductandCategory(prod, CategoryName) {
    this.selectedProduct = prod;
    this.selectedCategory = CategoryName;
  }
  getProductandCategory() {
    return { ...this.selectedProduct, ...this.selectedCategory };
  }
}
export interface Category {
  category_img: string;
  id: string;
  name: string;
  products: Product[];
}
export interface Product {
  id: string;
  name: string;
  weight: string;
  price: string;
  product_img: string;
}