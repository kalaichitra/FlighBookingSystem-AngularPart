import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-airline-mgmt',
  templateUrl: './airline-mgmt.component.html',
  styleUrls: ['./airline-mgmt.component.css']
})
export class AirlineMgmtComponent implements OnInit {

  constructor(private service:AirlineService) { }
AirlineList$!:Observable<any[]>;
  ngOnInit(): void {
    this.AirlineList$=this.service.GetAirlineSchedule();
    console.log(this.AirlineList$);
  }
  ModalTitle:string="";
  activateAddEditAirlineComponent:boolean=false;
  airline:any;

public editClick(data:any):void{
  console.log(data.airlineName);
      //services method
      
  }


  modalAdd()
  {
    this.airline={
      id:0,
      airlineName:null,
      
      Contact_Address:null,
      Contact_No:null,
      isActive: null
    }
    this.ModalTitle="Add Airline";
    this.activateAddEditAirlineComponent=true;
  }
}
