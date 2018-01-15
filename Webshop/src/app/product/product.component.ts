import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "./product.service";
import {Router} from "@angular/router";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Product} from "./product";
import {CartService} from "../cart/cart.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  product: Product;
  amount = 1;
  constructor(private productService: ProductService, private router:Router, private cartService: CartService) {
    this.getProducts();
  }

  public newProduct(): void {
    this.router.navigate(['product/new']);
  }

  public getProducts() {
    this.productService.getProduct().subscribe(
    resultProducts => {
      this.products = resultProducts;
      }
    )
  }

  public addProductToCart(product: Product){
    this.cartService.addToCart(product, this.amount);
  }

  addAmount(){
    this.amount += 1;
  }

  substractAmount() {
    this.amount -= 1;
    if(this.amount < 1){
      this.amount = 1;
    }
  }

  ngOnInit() {
  }

}

