import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AirlineService } from '../airline.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {
  public formReturnData!:FormGroup;
  isVisiblebForOneTrip = false; 
  isVisiblebyRoundOneTrip = false; 
 searchResults$!:Observable<any[]>;
 oneTrip$!:Observable<any[]>;
 RoundTrip$!:Observable<any[]>;
  errorMessage:any;
  constructor(private formBuilder: FormBuilder,private service:AirlineService,private activatedroute: ActivatedRoute, private router:Router) {} 

  private init():void{
    this.formReturnData=this.formBuilder.group({
      StartDate:[],
      EndDate:[],
      FromPlace:[],
      ToPlace:[],
      TripType:[]
    });
    }

    ngOnInit(): void {
      this.init();
    }
    public gotoDynamic(airline:any, FlightNo:any, startDate:any, ticketCost:any) {
      console.log(airline,FlightNo,startDate,ticketCost);
      this.router.navigate(['/booking-insert'], { queryParams: { AirlineName: airline, FlightNo:FlightNo, StartDate:startDate, Price:ticketCost } }); 
      
    }
  public onClickSubmit():void{
    this.isVisiblebForOneTrip = true; 
   this.isVisiblebyRoundOneTrip = true; 
     this.searchResults$= this.service.getSearchDetails(this.formReturnData.value);
     console.log(this.formReturnData.value);
      this.service.getSearchDetails(this.formReturnData.value).subscribe(result=>{
        error: (error:any) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
      });
    // this.formReturnData.value["TripType"]= JSON.parse( this.formReturnData.value["TripType"]);
    //   this.service.getSearchDetailsRabbitMQ(this.formReturnData.value).subscribe(result=>{
    //     alert("Passed data to RabbitMQ")
    //     error: (error:any) => {
    //       this.errorMessage = error.message;
    //       console.error('There was an error!', error);
    //   }
    //   });
      
    
  }
  
 

}
