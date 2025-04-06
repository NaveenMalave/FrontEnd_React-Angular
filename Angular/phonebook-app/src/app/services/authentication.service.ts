import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  login(username:string,password:string){
    return this.http.post<any>('http://localhost:5194/api/Account/login',{username:username,password:password});
  }
}
