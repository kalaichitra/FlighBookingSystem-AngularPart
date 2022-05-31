import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-airline-register',
  templateUrl: './airline-register.component.html',
  styleUrls: ['./airline-register.component.css']
})
export class AirlineRegisterComponent implements OnInit {
public airlineName: any;

  constructor(private service:AirlineService,private activatedroute: ActivatedRoute, private router:Router) { 
    
  }
  public gotoDynamic(airline:any) {
    console.log(airline);
    this.router.navigate(['/airline-schedule-insert'], { queryParams: { AirlineName: airline } }); 
    
  }
  private getAuthData() {  
    const token = localStorage.getItem("token");  
    const expirationDate = localStorage.getItem("expiration"); 
    if(!token|| !expirationDate){  
      return;  
    }   
  }  
AirlineList$!:Observable<any[]>;
  ngOnInit(): void {
    this.AirlineList$=this.service.GetAirlineRegisterDetails();
    //console.log(this.AirlineList$.subscribe((p:any)=>p.airlineName));
  }
  AlertMsg:any;
  activateAddEditAirlineComponent:boolean=false;
  airline:any;
  public editClick(data:any):void{
    console.log(data.isActive);
   if(data.isActive== true)
   {
     data.isActive=false;
     this.AlertMsg="Airline Blocked successfully"
   }
   else {
    data.isActive = true;
    this.AlertMsg="Airline unblocked successfully"
   }
    this.service.ActiveRegisterAirline(data).subscribe(result=>{
      alert(this.AlertMsg)
      console.log(data);
   });
        
    }

    public deleteClick(data:any):void{
      console.log(data.airlineName);
      console.log(this.airline);
      this.service.DeleteRegisterAirline(data.airlineName).subscribe(result=>{
        alert("Deleted Successfully")
        //console.log(this.airline);
     });
          
      }

      
      
}
