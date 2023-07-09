import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Kitchenstaff } from '../model/kitchenstaff';

@Injectable({
  providedIn: 'root'
})
export class KitchenstaffService {
  kitchenstaff=new Kitchenstaff();

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8090/api/v1/staff'; // Replace with your actual backend API URL

  getOrders(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/orders`);
  }
  getOrdersByRestuarent(restaurantName:any): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/ordersbyrestuarent/${restaurantName}`);
  }
  
  getOrdersByUser(username:any): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/ordersbyusername/${username}`);
  }

  updateOrderStatus(cartId: number): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/orders/${cartId}`,{});
  }

  private apiSUrl = 'http://localhost:9090/api/auth'; 
  signup(kitchenstaff:Kitchenstaff) {
    const body = {
      userName: kitchenstaff.userName,
      userFirstName: kitchenstaff.userFirstName,
      userPassword: kitchenstaff.userPassword
    };
    return this.http.post<any>(`${this.apiSUrl}/registerNewKitchenStaff`, body);
  }


}
