import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token/token.service";
import {Observable} from "rxjs/Observable";
import {Account} from "../account/account";
import {isUndefined} from "util";

@Injectable()
export class AuthService {

  isAdmin:boolean;

  public login(body): Observable<JSON> {
    return this.http.post("/api/login", body);
  }

  public logout(): void {
    this.tokenService.deleteToken();
  }
  public setIsAdmin(): void{
     this.getAuthenticatedUser().subscribe(
      resultAccount => {
        this.isAdmin = resultAccount.isadmin;
      }
    );
  }
  public getAuthenticatedUser(): Observable<Account> {
    return this.http.get<Account>("/api/account/me");
  }

  public isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  constructor(private http: HttpClient, private tokenService:TokenService) { }

}
