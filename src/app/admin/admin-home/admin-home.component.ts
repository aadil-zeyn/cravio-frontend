import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  activeComponent = '';

  adminEmail=localStorage.getItem('adminEmail');  
  
  constructor(private routerObj:Router) { 
   
    if(localStorage.getItem('adminEmail') == null){
      this.routerObj.navigate(['admin/login']);
    }
  }

  ngOnInit(): void {
     
  }
  logoutAdmin(){
    localStorage.removeItem('adminEmail');
    this.routerObj.navigate(['admin/login']);
  }
}
