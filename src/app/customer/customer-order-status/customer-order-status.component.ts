import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Order } from 'src/app/model/order';
import { KitchenstaffService } from 'src/app/service/kitchenstaff.service';

@Component({
  selector: 'app-customer-order-status',
  templateUrl: './customer-order-status.component.html',
  styleUrls: ['./customer-order-status.component.css']
})
export class CustomerOrderStatusComponent  implements OnInit  {
  orders: Order[]|any;

  constructor(private kitchenStaffService: KitchenstaffService) { }
userName=localStorage.getItem('customerEmail');
  ngOnInit(): void {
    this.fetchOrders();
    console.log("aadil")
  }

  fetchOrders(): void {console.log("aadil")
    this.kitchenStaffService.getOrdersByUser(this.userName).subscribe(
            orders => this.orders = orders,
            error=> console.error("aadil",error)
    );console.log(this.orders)
  }
}
