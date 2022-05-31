import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AirlineService } from '../airline.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";


import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-insert-schdule-airline',
  templateUrl: './insert-schdule-airline.component.html',
  styleUrls: ['./insert-schdule-airline.component.css']
})

export class InsertSchduleAirlineComponent implements OnInit {
airline:any;
  public formReturnData!:FormGroup;
  constructor(private formBuilder: FormBuilder,private service:AirlineService,private router: Router, private activatedRoute: ActivatedRoute) {
    //console.log(this.router.getCurrentNavigation().extras.state);
   }
  
  private init():void{
    this.formReturnData=this.formBuilder.group({
      AirlineName:this.airline,
      FlightNo:[],
      FromPlace:[],
      toPlace:[],
      startDate:[],
      endDate:[],
      scheduledDays:[],
      instrumentUsed:[],
      businessSeats:[],
      nonBusinessSeats:[],
      ticketCost:[],
      numberOfRows:[],
      mealType:[]
     
    });
    }

    ngOnInit(): void {
      this.activatedRoute.queryParamMap
      .subscribe(params => { 
        this.airline = params.get('AirlineName')|| 0;
        console.log('Query params ',this.airline) 
    });
      this.init();
      this.activatedRoute.data.subscribe(data => {
        this.airline = data;
        console.log(data);
      });

      

      //this.formReturnData=new FormGroup({
       // AirlineName: new FormControl(this.airline)
      //})
    }
   
  public onClickSubmit():void{
   
      //services method
      this.service.ScheduleAirline(this.formReturnData.value).subscribe(result=>{
        alert("Scheduled Successfully")
        console.log(this.formReturnData.value);
        this.router.navigate(['/airline-schedule']); 

      });
  }

}