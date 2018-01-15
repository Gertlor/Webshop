import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "./account";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class AccountService {

  constructor(private http: HttpClient, private router:Router, private authService:AuthService) { }

  createAccount(account: Account): Observable<any>{
    let accountInformation = {
      firstname: account.firstname,
      prefix: account.prefix,
      lastname: account.lastname,
      password: account.password,
      email: account.email,
      street: account.street,
      house_nr: account.house_nr,
      zipcode: account.zipcode,
      town: account.town,
    }

    return this.http.post('api/account/register', accountInformation);
  }

  getAccount():Observable<Account>{
    return this.authService.getAuthenticatedUser();
  }

}
