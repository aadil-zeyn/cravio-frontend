import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/model/Menu';
import { ConnectionService } from 'src/app/service/connection.service';
import { Location } from '@angular/common';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent {
  menus: Menu[];
  restname:string;
  cart:Cart;
  filteredMenus: Menu[]; // Variable to store the filtered menus
  searchTerm: string; // Added variable for search term

  customerEmail = localStorage.getItem('customerEmail');
  constructor(private cartServ: CartService,private connectService: ConnectionService, private route: ActivatedRoute,private location: Location, private router: Router) 
  {}
    


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.restname = params['restaurantName'];
      console.log(this.restname);
      this.fetchMenus();
    });
  }
  fetchMenus() {

    this.connectService.getMenu(this.restname).subscribe(
      (response) => {
        this.menus = response;
        this.filteredMenus = this.menus;
        console.log(this.menus);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // fetchMenus() {
  //   this.connectService.getMenu(this.restname, this.searchTerm).subscribe(
  //     (response) => {
  //       this.menus = response;
  //       console.log(this.menus);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  applyFilter(searchTerm: string): void {
    if (searchTerm) {
      this.filteredMenus = this.menus.filter((menu) =>
        menu.product.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredMenus = this.menus; // If no search term, show all menus
    }
  }
  

  goBack(): void {
    this.location.back();
  }


  addToCart(menu: Menu): void {
    // console.log(menu);
    this.cart = new Cart();
    this.cart.username = this.customerEmail; console.log(this.customerEmail)// Set the username to the customer's email
    this.cart.restName = this.restname; // Set the restaurant name
    this.cart.prodid = menu.id; // Set the product ID
    this.cart.prodname = menu.product; // Set the product name
    this.cart.price = menu.price; // Set the product price
    this.cart.status = 'Added'; // Set the status as "Added"
    this.cart.quantity = 1; // Set the quantity as 1 (you can change this as per your requirements)
    console.log(menu.id)
    console.log(this.cart.prodname)
    this.cartServ.addItemToCart(this.cart).subscribe(
      (data) => {
        alert('Added to cart successfully!');
        console.log(data,"r")
      },
      (error) => {
        console.log(error);
        alert('Failed to add to cart. Please try again.');
      }
    );
  }
  
}
