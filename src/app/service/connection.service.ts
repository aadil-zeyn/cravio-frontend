import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../model/Menu';
import { Restaurant } from '../model/restaurant';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

 

  constructor(private http: HttpClient) { }

  // addRestaurant(restaurantData: any) {
  //   return this.http.post<Restaurant>(`http://localhost:8081/allproducts/addProd`, restaurantData);
  // }

  addMenu(Menu: any):Observable<Menu>{
    return this.http.post<Menu>(`http://localhost:8081/allproducts/addProd`,Menu)
  }
  getMenu(restaurantName: string): Observable<Array<Menu>> {
    console.log(restaurantName);
    const url = `http://localhost:8081/allproducts/viewRestMenu/${restaurantName}`;
    
    return this.http.get<Array<Menu>>(url);
  }

  addRest(Restaurant:any):Observable<Restaurant>{
    return this.http.post<Restaurant>(`http://localhost:8081/allproducts/addRest`,Restaurant)
  }

  getRests():Observable<Array<Restaurant>>{
    return this.http.get<Array<Restaurant>>(`http://localhost:8081/allproducts/viewRest`);
  }

  getMenuByName(prodName:string):Observable<Menu>{
    return this.http.get<Menu>(`http://localhost:8081/allproducts/viewProd/${prodName}`);
  }

  updateItem(item: Menu): Observable<Menu> {
    const url = `http://localhost:8081/allproducts/updMenu`;
    return this.http.put<Menu>(url, item);
  }

  getRestaurantNames() :Observable<Array<String>>{
    return this.http.get<Array<String>>(`http://localhost:8081/allproducts/getRestName`);
  }



  
}
