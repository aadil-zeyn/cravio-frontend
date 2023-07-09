import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Admin } from '../../model/admin';
import { AdminService } from '../../service/admin.service';
import { UserService } from 'src/app/service/user.service';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin = new Admin();
  erroMessage = '';
  ted:boolean=false;
  
  constructor(private userService:UserService,
    private userAuthService:UserAuthService, private routerObj:Router) { }
  
  ngOnInit(): void {
  }

  loginAdmin(){
     
    this.userService.login(this.admin).subscribe(
      // data=>{
      //   console.log("admin successfully logged IN")
      //   this.routerObj.navigate(['admin/home'])
      // },
      // error => {
      //   console.log("Exception occured")
      //   this.erroMessage = "Bad credentails, Please Enter the correct ones"
      // }
      // )

      (response: any) => {
        // Handle successful login response
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
  
        const role = response.user.role[0].roleName;
        // if (role === 'Admin') {
          this.routerObj.navigate(['admin/home']);
        // } else {
        //   this.router.navigate(['/courses']);
        // }
      },
      (error: any) => {this.erroMessage = "Bad credentails, Please Enter the correct ones";
        // Handle login error
        if (error.status === 400 && error.error && error.error.errors) {
          // Validation errors occurred
          const validationErrors = error.error.errors;
          console.log(validationErrors); // You can handle the validation errors as needed
        } else {
          // Other error occurred
          console.log(error);
        }
      }
    );

      localStorage.setItem('adminEmail',this.admin.userName);
      // localStorage.setItem('adminName',this.admin.admin_name);
  }

}
