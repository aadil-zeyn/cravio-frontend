import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Kitchenstaff } from 'src/app/model/kitchenstaff';
import { ConnectionService } from 'src/app/service/connection.service';
import { KitchenstaffService } from 'src/app/service/kitchenstaff.service';

@Component({
  selector: 'app-add-kitchen-staff',
  templateUrl: './add-kitchen-staff.component.html',
  styleUrls: ['./add-kitchen-staff.component.css']
})
export class AddKitchenStaffComponent {
  kstaff = new Kitchenstaff();
  restaurantNames: String[];
  kstaffForm: FormGroup;

  constructor( private formBuilder: FormBuilder,private connectServ: ConnectionService, private kStaffServ: KitchenstaffService){}

  ngOnInit(){
    this.kstaffForm = this.formBuilder.group({
      userName: [''],
      userPassword: [''],
      restName: ['']
    });
    this.connectServ.getRestaurantNames().subscribe(names => {
      this.restaurantNames = names;
    });
  }

  onSubmit(){
    const formValues = this.kstaffForm.value;

    this.kstaff.userName=formValues.userName;
    this.kstaff.userPassword=formValues.userPassword;
    this.kstaff.userFirstName=formValues.restName;


    this.kStaffServ.signup(this.kstaff).subscribe(
      (data: any) => 
      {
        alert("Added");
        console.log(data);
        this.kstaffForm.reset();
      },
      (_err: any) =>   ("Already present!")
      );

  
  }
}
