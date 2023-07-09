import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Kitchenstaff } from 'src/app/model/kitchenstaff';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  kitchenstaff=new Kitchenstaff();
  restuarentName=localStorage.setItem('restaurent',this.kitchenstaff.userFirstName)
  constructor(
    private router:Router,private fb: FormBuilder,
    private userService:UserService,
    private userAuthService:UserAuthService) { 
   
 }
 login() {localStorage.setItem('restUsername',this.kitchenstaff.userName);
  this.userService.login(this.kitchenstaff).subscribe(
    (response: any) => {
      // Handle successful login response
      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.jwtToken);

      const role = response.user.role[0].roleName;
      if (role === 'KitchenStaff') 
        this.router.navigate(['kitchenstaff/dashboard']);
       else alert("incorrect credentials");
      //   this.router.navigate(['/courses']);
      // }
    },
    (error: any) => {console.log("login error")
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
}

}
