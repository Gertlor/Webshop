import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "./account";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class AccountService {

  constructor(private http: HttpClient, private router:Router) { }

  createAccount(account: Account): Observable<any>{
    let accountGegevens = {
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

    return this.http.post('api/account/register', accountGegevens);
  }





}
