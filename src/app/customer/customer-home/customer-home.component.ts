import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';


@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  customerEmail = localStorage.getItem('customerEmail');

  customerName:any;

  constructor(private routerObj:Router,private http: HttpClient) { 
    console.log(localStorage.getItem('customerEmail'));
    if(localStorage.getItem('customerEmail') == null) {
      this.routerObj.navigate(['customer/login']);
    }
  }
  urlToGo:any;
  ngOnInit(): void {
    this.getName(localStorage.getItem('customerEmail'));
  }
  viewProfile(){
    this.routerObj.navigate(['customer/profile']);
  }
  logoutCustomer() {
    localStorage.removeItem('customerEmail');
    this.routerObj.navigate(['customer/login']);
  }

  viewCart(){
    this.routerObj.navigate(['customer/cart']);
  }
  private baseUrl = 'http://localhost:9090/api/auth/getUserName/';

  

  async getName(username: any) {
    const url = this.baseUrl + username;
    try {
      const name = await this.http.get(url, { responseType: 'text' }).toPromise();
      this.customerName=name;
      console.log('Name:', name);
    } catch (error) {
      console.error('Error fetching name:', error);
    }
  }

  orderStatus(): void {
    // Implement any necessary logic before navigating to the checkout page
    // this.router.navigate(['/customer/checkout']);
    this.routerObj.navigate(['/customer/orderstatus'])
  }

}
