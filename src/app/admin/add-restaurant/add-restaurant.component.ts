import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Restaurant } from 'src/app/model/restaurant';
import { ConnectionService } from 'src/app/service/connection.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {

  rests=new Restaurant();
  restForm: FormGroup;
  rest: Restaurant;
 

  constructor( private formBuilder: FormBuilder,private connectServ: ConnectionService){}

  ngOnInit() {
    this.restForm = this.formBuilder.group({
      restaurantName: ['', Validators.required],
      cuisine: ['', Validators.required],
      imageUrl: ['', Validators.required],
      location: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.rest = new Restaurant();
  }

  onSubmit() {
    const formValues = this.restForm.value;

    this.rests.restName=formValues.restaurantName;
    console.log('Product Name:', this.rests.restName);
    this.rests.cuisine=formValues.cuisine;
    this.rests.logoUrl=formValues.imageUrl;
    this.rests.location=formValues.location;
    this.rests.phone=formValues.phone;


    this.connectServ.addRest(this.rests).subscribe(
      data => 
      {
        alert("Added");
        console.log(data);
        this.restForm.reset();
      },
      _err =>   ("Already present!")
      );

  }

 
}
