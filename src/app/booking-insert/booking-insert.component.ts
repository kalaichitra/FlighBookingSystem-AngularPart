import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AirlineService } from '../airline.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-booking-insert',
  templateUrl: './booking-insert.component.html',
  styleUrls: ['./booking-insert.component.css']
})
export class BookingInsertComponent implements OnInit {

  airline:any;
  flightNo:any;
  startDate:any;
  userName:any;
  email:any;
  price:any;
  discount:any;
  public formReturnData!:FormGroup;
  constructor(private formBuilder: FormBuilder,private service:AirlineService,private router: Router, private activatedRoute: ActivatedRoute) {
    //console.log(this.router.getCurrentNavigation().extras.state);
   }
   errorMessage:any;
  private init():void{
    this.formReturnData=this.formBuilder.group({
     
      userName:this.userName,
      emailId:this.email,
      noOfSeats:[],
      mealType:[],
      price:this.price,
      startDateTime:this.startDate,
      passengerName:[],
      passengerGender:[],
      passengerAge:[],
      airlineName:this.airline,
      discount:[],
      flightNo:this.flightNo
   
    });
    }

    ngOnInit(): void {
      this.activatedRoute.queryParamMap
      .subscribe(params => { 
        this.airline = params.get('AirlineName')|| 0;
        this.flightNo = params.get('FlightNo')|| 0;
        this.startDate=params.get('StartDate')|| 0;
        this.price=params.get('Price')|| 0;
        console.log('Query params ',this.airline, this.flightNo, this.startDate, this.price);
        this.userName = localStorage.getItem("username");
        this.email = localStorage.getItem("email");
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
   public validateDiscount(value:any){
    this.service.couponCheck(value.discount).subscribe(result=>{
      console.log(result.discount);
      this.discount= (this.price * value.noOfSeats) * (result.discount/100);
      this.price=this.price-this.discount;
      console.log(this.price);
      this.formReturnData.controls['price'].setValue(this.price);
      this.formReturnData.controls['discount'].setValue(this.discount);
   });
   }
  public onClickSubmit():void{
    console.log(this.formReturnData.value);
      //services method
      this.service.BookTicket(this.formReturnData.value).subscribe(result=>{
        alert("Ticket booked Successfully")
        this.router.navigate(['/booking-detail']);
        console.log(this.formReturnData.value);
        error: (error:any) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
           
      }

      });
      
  }

}