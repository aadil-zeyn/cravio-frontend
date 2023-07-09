
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './admin/add-menu/add-menu.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
// import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateMenuComponent } from './admin/update-menu/update-menu.component';
import { ViewMenusComponent } from './admin/view-menus/view-menus.component';
import { ViewRestaurantsComponent } from './admin/view-restaurants/view-restaurants.component';
import { AboutComponent } from './about/about.component';
import { AddRestaurantComponent } from './admin/add-restaurant/add-restaurant.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { ListMenuComponent } from './customer/list-menu/list-menu.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { CustomerOrderStatusComponent } from './customer/customer-order-status/customer-order-status.component';

import { AuthGuard } from './auth/auth.guard';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { DashboardComponent } from './kitchenstaff/dashboard/dashboard.component';
import { LoginComponent } from './kitchenstaff/login/login.component';
import { RegisterComponent } from './kitchenstaff/register/register.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'admin/login',component:AdminLoginComponent},
  // {path:'admin/register',component:AdminRegisterComponent},
  {path:'admin/home',component:AdminHomeComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'about',component:AboutComponent},
  { path: 'add-restaurant', component: AddRestaurantComponent ,canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: 'add-menu', component: AddMenuComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'view-restaurants', component: ViewRestaurantsComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'update-menu/:prodName', component: UpdateMenuComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'view-menus/:restaurantName', component: ViewMenusComponent ,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/home',component:CustomerHomeComponent},
  {path:'customer/register',component:CustomerRegisterComponent},
  {path:'customer/profile',component:CustomerProfileComponent},
  {path:'customer/list-menus/:restaurantName',component:ListMenuComponent},
  {path:'customer/cart',component:CustomerCartComponent},
  {path:'customer/checkout',component:CheckoutComponent},
  {path:'customer/orderstatus',component:CustomerOrderStatusComponent},
  {path:'kitchenstaff/dashboard',component:DashboardComponent,canActivate:[AuthGuard], data:{roles:['KitchenStaff']}},
  {path:'kitchenstaff/login',component:LoginComponent},
  {path:'kitchenstaff/register',component:RegisterComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'forbidden',component:ForbidenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
