import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "./product.service";
import {Router} from "@angular/router";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Product} from "./product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService, private router:Router) {
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

  ngOnInit() {
  }

}

