import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { ConnectionService } from 'src/app/service/connection.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent {

  rests: Restaurant[];

  constructor(private connectService: ConnectionService, private router: Router) {}

  ngOnInit() {
    this.fetchMenus();
    // this.Actroute.paramMap.subscribe((data)=>{

    // })
  }

  fetchMenus() {
    this.connectService.getRests().subscribe(
      (data: any[]) => {
        this.rests = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  viewMenu(restaurantName: string): void {
    console.log(restaurantName);
    this.router.navigate(['/customer/list-menus', restaurantName]);
  }
}
