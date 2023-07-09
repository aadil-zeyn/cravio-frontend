import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from '../../model/Menu';
import { ConnectionService } from '../../service/connection.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  restaurantName: string;
  menu=new Menu();
  menuForm: FormGroup;
  rest: Menu;
  restaurantNames: String[];
  selectedRestaurant: any;

  constructor( private formBuilder: FormBuilder,private connectServ: ConnectionService){

  }
  ngOnInit() {
    this.menuForm = this.formBuilder.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      restaurantName: ['', Validators.required]
    });

    this.rest = new Menu();

    this.connectServ.getRestaurantNames().subscribe(names => {
      this.restaurantNames = names;
    });
  }
  onSubmit() {
    // console.log('Product Name:', this.productName);
    // console.log('Price:', this.price);
    // console.log('Description:', this.description);
    // console.log('Image URL:', this.imageUrl);
    // console.log('Restaurant Name:', this.restaurantName);

    const formValues = this.menuForm.value;

    this.menu.product=formValues.productName;
    console.log('Product Name:', this.menu.product);
    this.menu.price=formValues.price;
    this.menu.image=formValues.imageUrl;
    console.log('Product Name:', this.menu.image);
    this.menu.description=formValues.description;
    this.menu.restname=formValues.restaurantName;
    console.log('Product Name:', this.menu.restname);


    this.connectServ.addMenu(this.menu).subscribe(
      data => 
      {
        alert("Added");
        console.log(data);
        this.menuForm.reset();
      },
      _err => alert("Already present!")
      );

  }
}
