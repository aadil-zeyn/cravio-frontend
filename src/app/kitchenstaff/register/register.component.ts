import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Kitchenstaff } from 'src/app/model/kitchenstaff';
import { KitchenstaffService } from 'src/app/service/kitchenstaff.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  kitchenstaff=new Kitchenstaff();
  errorMessage:string='';
  constructor(private kitchenstaffService:KitchenstaffService, private routerObj:Router) { }
  register() {
    this.kitchenstaffService.signup(this.kitchenstaff).subscribe(
      data=>{
        console.log("kitchenstaff Registered in successfully");
        this.routerObj.navigate(['admin/home']);
      },
      error=>{
        this.errorMessage = 'Bad Credentials. Please enter the correct one!!!'
        console.log(error);
      }
    )
  }
}
