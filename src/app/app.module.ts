import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AddMenuComponent } from './admin/add-menu/add-menu.component';
import { AddRestaurantComponent } from './admin/add-restaurant/add-restaurant.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
// import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { UpdateMenuComponent } from './admin/update-menu/update-menu.component';
import { ViewMenusComponent } from './admin/view-menus/view-menus.component';
import { ViewRestaurantsComponent } from './admin/view-restaurants/view-restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { ListRestaurantComponent } from './customer/list-restaurant/list-restaurant.component';
import { ListMenuComponent } from './customer/list-menu/list-menu.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
// import { KitchenStaffHomeComponent } from './kitchen-staff/kitchen-staff-home/kitchen-staff-home.component';
import { CustomerOrderStatusComponent } from './customer/customer-order-status/customer-order-status.component';

import { SearchComponent } from './search/search.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { LoginComponent } from './kitchenstaff/login/login.component';
import { RegisterComponent } from './kitchenstaff/register/register.component';
import { DashboardComponent } from './kitchenstaff/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    // AdminRegisterComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AboutComponent,
    FooterComponent,
    AddMenuComponent,
    AddRestaurantComponent,
    ViewRestaurantsComponent,
    ViewMenusComponent,
    UpdateMenuComponent,
    CustomerHomeComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    CustomerProfileComponent,
    ListRestaurantComponent,
    ListMenuComponent,
    CustomerCartComponent,
    CheckoutComponent,

    SearchComponent,

    CustomerOrderStatusComponent,
    ForbidenComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
