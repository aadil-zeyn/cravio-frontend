import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

    /*Customer Add To Cart*/
    addItemToCart(c: Cart):Observable<Cart>{
      console.log("this",c)
      return this.http.post<Cart>(`http://localhost:8090/api/v1/cart/addCart`,c)
    }
  
    getCart(username: any):Observable<Array<Cart>>{
        return this.http.get<Array<Cart>>(`http://localhost:8090/api/v1/cart/viewByuser/${username}`);
    }

    removeFromCartByUsername(customerEmail: string | null, cartid: number) {
      const url = `http://localhost:8090/api/v1/cart/del/${cartid}/${customerEmail}`;
      return this.http.delete<void>(url);
    }

    removeCartByUsername(customerEmail: string | null) {
      const url = `http://localhost:8090/api/v1/cart/del/${customerEmail}`;
      return this.http.delete<void>(url);
    }

    private baseUrl = 'http://localhost:8090/api/v1'; 

    dupdateQuantity(cartid: number): Observable<Cart> {
      const url = `${this.baseUrl}/cart/decrementUpdateQuantity/${cartid}`;
      return this.http.put<Cart>(url, null);
    }
  
    iupdateQuantity(cartid: number): Observable<Cart> {
      const url = `${this.baseUrl}/cart/incrementUpdateQuantity/${cartid}`;
      return this.http.put<Cart>(url, null);
    }
   
}
