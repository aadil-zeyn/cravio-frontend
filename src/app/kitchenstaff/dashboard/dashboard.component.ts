import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Order } from 'src/app/model/order';
import { KitchenstaffService } from 'src/app/service/kitchenstaff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  orders: Order[]|any;
   restuarentUserName=localStorage.getItem('restUsername');
   restuarentName:any;
  // private restaurantName: string;
  constructor(private kitchenStaffService: KitchenstaffService,private http: HttpClient) {
    // this.restaurantName = localStorage.getItem('restName') || '';
   }

  ngOnInit(): void {
    // this.getName(this.restuarentUserName)
    // this.fetchOrders();
    this.getName(this.restuarentUserName)
  .then(() => {
    this.fetchOrders();
  })
  .catch((error) => {
    console.error('Failed to get name:', error);
  });
    console.log(this.restuarentUserName)
    console.log(this.restuarentName,"dfghj");
  }

  // fetchOrders(): void {console.log("aadil")
  //   this.kitchenStaffService.getOrders().subscribe(
  //           orders => this.orders = orders,
  //           error=> console.error("aadil",error)
  //   );
  // }

  fetchOrders(): void {console.log("hh",this.restuarentName)
    this.kitchenStaffService.getOrdersByRestuarent(this.restuarentName).subscribe(
            orders => this.orders = orders,
            error=> console.error("aadil",error)
    );
  }

  changeStatus(order: Order): void {
    this.kitchenStaffService.updateOrderStatus(order.orderid).subscribe(
      (      updatedOrder: { status: string; }) => {
        order.status = updatedOrder.status;
      },
      (      error: any) => console.error(error)
    );
  }




  private baseUrl = 'http://localhost:9090/api/auth/getUserName/';

  

  async getName(username: any) {
    const url = this.baseUrl + username;
    try {
      const name = await this.http.get(url, { responseType: 'text' }).toPromise();
      this.restuarentName=name;
      console.log('Name:', this.restuarentName);
    } catch (error) {
      console.error('Error fetching name:', error);
    }console.log('Name:', this.restuarentName);
  }





}
