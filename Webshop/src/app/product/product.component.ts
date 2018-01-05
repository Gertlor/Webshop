import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "./product.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private router:Router) { }

  public newProduct(): void {
    this.router.navigate(['product/new']);
  }

  ngOnInit() {
  }

}
