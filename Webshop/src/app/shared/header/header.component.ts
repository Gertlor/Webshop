import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthGuardService} from "../../auth/guard/auth-guard.service";
import {AuthService} from "../../auth/auth.service";
import {ProductService} from "../../product/product.service";
import {Account} from "../../account/account";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentAccount:Account = new Account();
  isCurrentAdmin:boolean = false;

  constructor(private router:Router, private authService:AuthService) { }

  public logout() {
    this.authService.logout();
    window.location.reload();
    this.router.navigate(['home']);
  }

  public isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {
    this.checkCurrentAccount();
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
