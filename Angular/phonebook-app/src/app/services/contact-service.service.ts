import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
baseUrl:string = 'http://localhost:5194/api/Contacts/';
  constructor(private http:HttpClient) { }
    getContacts():Observable<Contact[]>{
      return this.http.get<Contact[]>(this.baseUrl+'GetContacts');
    }
    getContactById(id:number=1):Observable<Contact>{
      return this.http.get<Contact>(this.baseUrl+'GetContactById/'+id);
    }
    addContact(contact:any):Observable<any>{
      return this.http.post(this.baseUrl+'AddContact/',contact);
    }
    updateContact(contact:any):Observable<any>{
      return this.http.put(this.baseUrl+'UpdateContactById/'+contact.id,contact)
    }
    deleteContact(id:number=1){
      return this.http.delete(this.baseUrl+'DeleteContact/'+id);
    }
  
}
