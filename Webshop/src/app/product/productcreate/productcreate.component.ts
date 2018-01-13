import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {Router} from "@angular/router";
import {ProductService} from "../product.service";
import {AuthService} from "../../auth/auth.service";
import {Account} from "../../account/account";

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  ngOnInit(){
    this.checkCurrentAccount();
  }

  product:Product = new Product();
  currentAccount:Account = new Account();
  isCurrentAdmin:boolean = false;


  constructor(private router:Router, private productService:ProductService, private authService: AuthService) {
  }

  public createProduct():void{
    this.productService.createProduct(this.product).subscribe(accountGegevens => {
      this.router.navigate(['products'])
    }, (err: any) => {

    })
  }

  public checkCurrentAccount(){
    this.authService.getAuthenticatedUser()
      .subscribe(
        resultAccount => {
          this.currentAccount = resultAccount;
          this.isCurrentAdmin = resultAccount.isadmin;
        }
      );
  }

}
