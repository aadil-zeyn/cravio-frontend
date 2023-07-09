import { Component } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import { ConnectionService } from 'src/app/service/connection.service';
import { Location } from '@angular/common';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent {

    cartItems: Cart[] = [];
    
    customerEmail = localStorage.getItem('customerEmail');
  

    getTotalQuantity(): number {
      let totalQuantity = 0;
  
      for (const cartItem of this.cartItems) {
        totalQuantity += cartItem.quantity;
      }
  
      return totalQuantity;
    }
    
  constructor(private cartService: CartService,private location: Location,private router: Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartService.getCart(this.customerEmail).subscribe(
      (response) => {
        this.cartItems = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeFromCart(cartItem: Cart): void {
    this.cartService.removeFromCartByUsername(this.customerEmail, cartItem.cartid).subscribe(
    () => {console.log("meir")
        this.cartItems = this.cartItems.filter(item => item.prodid !== cartItem.prodid);
        alert("Item successfully removed from cart");
      },
      (error: any) => {
        console.log(error);
      }
    );
      
  }
  

  decrementupdateQuantity(cartItem: Cart): void {
    this.cartService.dupdateQuantity(cartItem.cartid).subscribe(
      (data) => {
        // Update the cartItem with the updated quantity received from the server
        cartItem.quantity = data.quantity;
      },
      (error) => {
        console.log(error);
        alert('Failed to update quantity. Please try again.');
      }
    );
  }

  incrementupdateQuantity(cartItem: Cart): void {
    this.cartService.iupdateQuantity(cartItem.cartid).subscribe(
      (data) => {
        // Update the cartItem with the updated quantity received from the server
        cartItem.quantity = data.quantity;
      },
      (error) => {
        console.log(error);
        alert('Failed to update quantity. Please try again.');
      }
    );
  }

  calculateTotalCost(): number {
    let totalCost = 0;
    for (const cartItem of this.cartItems) {
      totalCost += cartItem.price * cartItem.quantity;
    }
    return totalCost;
  }

  goBack(): void {
    this.location.back();
  }

  proceedToPayment(): void {
    // Implement any necessary logic before navigating to the checkout page
    // this.router.navigate(['/customer/checkout']);
    this.cartService.removeCartByUsername(this.customerEmail).subscribe(
      () => {
        console.log("Cart successfully removed");
        this.router.navigate(['/customer/orderstatus']);
      },
      (error: any) => {
        console.log(error);
      }
    );this.router.navigate(['/customer/orderstatus']);
  }
  

}
