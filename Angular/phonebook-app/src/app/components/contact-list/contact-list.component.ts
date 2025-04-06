import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import {HttpClient} from '@angular/common/http';
import { ContactService} from 'src/app/services/contact-service.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts :Contact[] =[];
  constructor(private router:Router,private service:ContactService){

    // this.contacts.push(new Contact(1,"Ram","Nath","","","","","","","","7.jpg"));
    // this.contacts.push(new Contact(0,"","","","","","","","","","7.jpg"));
    // this.contacts.push(new Contact(0,"","","","","","","","","","7.jpg"));
  }
  // ngOnInit(): void {
  //   this.http.get<Contact[]>('http://localhost:5194/api/Contacts/GetContacts').subscribe((data)=>{
  //     this.contacts=data;
  //   });
  // }
  ngOnInit(): void {
    this.service.getContacts().subscribe((data:Contact[])=>{
      this.contacts=data;
    });
  }
editContact(id?:number){
  // console.log("edit:",id);
  this.router.navigate(['/edit-contact',id]);

}
deleteContact(id?:number){
// console.log("delete",id);
this.service.deleteContact(id).subscribe(data=>{
  // alert(data.msg);
  this.contacts=this.contacts.filter(c=>c.id!=id);
});
}
logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}
}
