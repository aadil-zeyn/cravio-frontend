import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  
  customer = new Customer()
  customerEmail = localStorage.getItem('customerEmail');
  customerName = localStorage.getItem('customerName');
  customerAddress = localStorage.getItem('customerAddress'); 
  constructor(private customerService:CustomerService, private routerObj:Router) { }

  ngOnInit(): void {
  }

  getProfile() {
    
  //  this.customerService.getCurrentCustomer().subscribe(
  //   data=>this.customer
  //  );
  //  console.log(this.customer.customer_email);
  
  }
  goToHome() {
    this.routerObj.navigate(['customer/home']);
  }

}
