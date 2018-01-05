import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {MessageService} from "../shared/message/message.service";

@Injectable()
export class ProductService {


  constructor(private http: HttpClient, private router:Router, private messageService:MessageService) { }


}
