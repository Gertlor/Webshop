import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import {AccountService} from "../account.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  account: Account = new Account();

  constructor(private accountService:AccountService,  private router:Router){
  }
  ngOnInit() {

  }

  public createAccount():void{
    this.accountService.createAccount(this.account).subscribe(accountGegevens => {
      this.router.navigate(['home'])
    }, (err: any) => {

    })
  }

}



