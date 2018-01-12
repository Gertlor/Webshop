import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {MessageService} from "../shared/message/message.service";
import {Observable} from "rxjs/Observable";
import {Product} from "./product";

@Injectable()
export class ProductService {


  constructor(private http: HttpClient, private router:Router, private messageService:MessageService) { }


  getProduct():Observable<Product[]> {

    return this.http.get<Product[]>('api/product/all/')
  }

}
