import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AirlineService } from './airline.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  

  title = 'airline-reservation-system';
    constructor(public  activatedroute: ActivatedRoute, private router:Router) { }
    public logout() {  
     
      localStorage.clear();
      this.router.navigate(['/login']); 
    }  
   
}
