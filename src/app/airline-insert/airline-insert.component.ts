import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AirlineService } from '../airline.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-airline-insert',
  templateUrl: './airline-insert.component.html',
  styleUrls: ['./airline-insert.component.css']
})
export class AirlineInsertComponent implements OnInit {
  public formReturnData!:FormGroup;
  errorMessage:any;
  constructor(private formBuilder: FormBuilder,private service:AirlineService,private router: Router, private activatedRoute: ActivatedRoute) {
     }

  private init():void{
    this.formReturnData=this.formBuilder.group({
      airlineName:[],
      contactAddress:[],
      contactNo:[],
      Active:[]
    });
    }

    ngOnInit(): void {
      this.init();
    }
   
  public onClickSubmit():void{
    
      //services method
      this.service.registerAirline(this.formReturnData.value).subscribe(result=>{
        alert("Airline Register Successfully")
        this.router.navigate(['/airline-register']);
        console.log(this.formReturnData.value);
        error: (error:any) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
      });
  }

}
