import { Component, OnInit } from '@angular/core';
import {Account} from "../account";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

  account: Account = new Account;

  constructor(private accountService:AccountService) { }

  getAccount(){
    this.accountService.getAccount().subscribe(resultAccount => {
      this.account = resultAccount;
    });
  }

  ngOnInit() {
    this.getAccount();
  }

}
