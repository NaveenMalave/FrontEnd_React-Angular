import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-add-contact-details',
  templateUrl: './add-contact-details.component.html',
  styleUrls: ['./add-contact-details.component.css']
})
export class AddContactDetailsComponent {
  contact?:Contact;
constructor(private service:ContactService,private router:Router){
  this.contact = new Contact(0,'','','','','','','','','','');
}
addContact(){
  // console.log('record added:',this.contact);
  //call api for insert
  this.service.addContact(this.contact).subscribe(data=>{
    alert(data.msg);
    this.router.navigate(["/contact-list"]);
  });
}
}
