import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  // http://localhost:5133/api/AddCustomer/AddCustomerDetails
  baseUrl:string = 'http://localhost:5133/api/';
  constructor(private http:HttpClient) { }
   
  AddCustomerDetails(customer:any):Observable<any>{
      return this.http.post(this.baseUrl+'AddCustomer/AddCustomerDetails',customer);
    } 
}
