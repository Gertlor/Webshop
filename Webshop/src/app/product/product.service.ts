import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {MessageService} from "../shared/message/message.service";
import {Observable} from "rxjs/Observable";
import {Product} from "./product";

@Injectable()
export class ProductService {


  constructor(private http: HttpClient, private router:Router, private messageService:MessageService) { }


  public getProduct():Observable<Product[]> {

    return this.http.get<Product[]>('api/product/all/')
  }

  public getProductInformation(prod_id):Observable<Product[]>  {
    let idString = "";
    for(let i = 0; i < prod_id.length; i++){
      idString += prod_id[i] + "-";
    }
    return this.http.get<Product[]>('api/product/'  + idString);
  }

  public createProduct(product:Product):Observable<any> {
    let productInformation = {
      name: product.name,
      description: product.description,
      path: product.path,
      price: product.price
    }
    return this.http.post('api/product/create', productInformation);
  }
}
