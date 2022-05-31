import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AirlineService } from '../airline.service';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  public formReturnData!:FormGroup;
  errorMessage:any;
  constructor(private formBuilder: FormBuilder,private service:AirlineService) { }

  private init():void{
    this.formReturnData=this.formBuilder.group({
      discontCost:[],
      dicountCode:[],
    });
    }

    ngOnInit(): void {
      this.init();
    }
   
  public onClickSubmit():void{
    
      //services method
      this.service.AddCoupon(this.formReturnData.value).subscribe(result=>{
        alert("Coupon Created Successfully")
        console.log(this.formReturnData.value);
        error: (error:any) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
      });
  }

}