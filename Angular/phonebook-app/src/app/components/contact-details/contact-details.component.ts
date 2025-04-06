import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
contact?:Contact;
constructor(private service : ContactService,private activatedRoute : ActivatedRoute ){
  // this.contact = new Contact(1,"Naveen","malave","Male","29-04-2002","naveen@gmail.com",
  //   "1234677887","Bangalore","Karnataka","India","./assets/images/7.jpg")
}
ngOnInit(): void{
  this.activatedRoute.params.subscribe((params)=>{
    this.service.getContactById(params["id"]).subscribe((data)=>{
      this.contact = data;
    });
  })
}
}
