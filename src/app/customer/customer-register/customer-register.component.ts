import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {



 customer = new Customer();
  errorMessage:string='';
  constructor(private customerService:CustomerService, private routerObj:Router) { }

  ngOnInit(): void {
  }
    registerCustomer() {
    this.customerService.signup(this.customer).subscribe(
      data=>{
        console.log("User Registered in successfully");
        this.routerObj.navigate(['/customer/login']);
      },
      error=>{
        this.errorMessage = 'Bad Credentials. Please enter the correct one!!!'
        console.log(error);
      }
    )
  }
}
