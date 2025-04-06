import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
customer: Customer = {
  id:0,
  firstName: '',
  lastName: '',
  date_of_Birth : '',
  phone: '',
  email: '',
  address: '',
  company_Name: '',
  salary: 0,
  net_Income: 0,
  last_salary_date: '',
};

constructor(private service:CustomerServiceService){}


onSumit() {
  console.log('Form Submitted:', this.customer);
  
  this.service.AddCustomerDetails(this.customer).subscribe(
    (data: any) => {
      console.log('Customer added:', data);
      alert('Loan Application Submitted Successfully');
      alert(data.msg);
    },
    (error: any) => {
      console.error('error adding Customer details', error);
    }
  );
}
  onCancel() {
  if (this.customer) {
    this.customer = {
      id: 0,
      firstName: '',
      lastName: '',
      date_of_Birth: '',
      phone: '',
      email: '',
      address: '',
      company_Name: '',
      salary: 0,
      net_Income: 0,
      last_salary_date: '',
    };
  }
}
}


