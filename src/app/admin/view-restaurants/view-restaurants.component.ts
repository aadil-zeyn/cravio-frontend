import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../model/restaurant';
import { ConnectionService } from '../../service/connection.service';

@Component({
  selector: 'app-view-restaurants',
  templateUrl: './view-restaurants.component.html',
  styleUrls: ['./view-restaurants.component.css']
})
export class ViewRestaurantsComponent {

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
    this.router.navigate(['/view-menus', restaurantName]);
  }
}
