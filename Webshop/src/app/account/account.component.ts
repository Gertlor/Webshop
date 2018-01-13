///<reference path="account.service.ts"/>
import { Component, OnInit } from '@angular/core';
import {AccountService} from "./account.service";
import {Account} from "./account";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account:Account;

  constructor(private authService: AuthService, private accountService:AccountService, private router:Router) { }


  ngOnInit() {

  }
}


