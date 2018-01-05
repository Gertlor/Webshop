import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  product:Product = new Product();
  editing:boolean = false;

  constructor() {
  }


}
