import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
contact?:Contact;
editForm?:FormGroup;

constructor(private activatedRoute : ActivatedRoute,private router:Router,private service:ContactService){

}
ngOnInit(): void {
  //get the id value from the route
  this.activatedRoute.params.subscribe(params =>{
    let id= params['id'];
    
  this.service.getContactById(id).subscribe(data =>{

  // this.contact = new Contact(1,"John","dee","Male","25-01-2025","joh@gmail.com","56454432","Bangalore","Karnataka","Indiia","11.jgp");
  this.contact= data;
  this.editForm= new FormGroup({
    id:new FormControl(this.contact.id),
    firstname:new FormControl(this.contact.firstname,Validators.compose([Validators.required,Validators.minLength(3)])),
    lastname:new FormControl(this.contact.lastname,Validators.compose([Validators.required,Validators.minLength(3)])),
    phone:new FormControl(this.contact.phone,Validators.compose([Validators.required,Validators.pattern("^[0-9]{10,10}$")])),
    dob:new FormControl(this.contact.dob),
     gender:new FormControl(this.contact.gender,Validators.required),
    email:new FormControl(this.contact.email,Validators.compose([Validators.required,Validators.email])),
    city:new FormControl(this.contact.city,Validators.required),
    state:new FormControl(this.contact.state,Validators.required),
    country:new FormControl(this.contact.country,Validators.required),
    picture:new FormControl(this.contact.picture,Validators.required)
  });
});
  });
}

updateContact(value: Contact){
  this.contact= value;
  console.log('record updated',this.contact);
  this.service.updateContact(this.contact).subscribe(data =>{
  alert("record updatd successfully"+data.msg);
  this.router.navigate(['/contact-list']);
})};
}
