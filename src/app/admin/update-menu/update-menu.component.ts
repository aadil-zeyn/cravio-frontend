import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../model/Menu';
import { ConnectionService } from '../../service/connection.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent {

  prodName: string;
  item: Menu;

  constructor(private route: ActivatedRoute, private connectService: ConnectionService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.prodName = params['prodName'];
      // this.item = this.connectionServ.getMenuByName(this.prodName);
      this.fetchMenus();
    });
  }
  fetchMenus() {
    this.connectService.getMenuByName(this.prodName).subscribe(
      (response) => {
        this.item = response;
        console.log(this.item);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    // Call the itemService's updateItem() method to update the item in the backend
    this.connectService.updateItem(this.item).subscribe(() => {
      alert("Updated Successfully");
      // Redirect to the view-menu component after the update is successful
      // this.router.navigate(['/view-menus']);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
