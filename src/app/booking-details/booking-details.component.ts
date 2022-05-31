import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AirlineService } from '../airline.service';
import { Observable } from 'rxjs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  formReturnData:any;
  obj:any;
  value:any;
  isVisiblebyPnr = false; 
  isVisiblebyEmail = false; 
pnr:any;
  //bookingDetails: AirlineService[];
  constructor(private service :AirlineService){
  }
bookingDetails$!:Observable<any[]>;
bookingDetailsbyemail$!:Observable<any[]>;
  
  //bookingDetails: AirlineService[];
  onClickSubmit(value:any){
    this.pnr=value.pnr;
    //this.bookingDetails$=this.service.getBookingDetails(value.pnr);
    console.log(this.bookingDetails$);
    this.service.getBookingDetails(value.pnr).subscribe(data => {  this.bookingDetails$ = data; console.log( data)});
    this.isVisiblebyPnr=true;
  }
  onClickEmailSubmit(value:any){
    this.pnr=value.pnr;
    //this.service.getBookingDetailsbyemail(value.email).subscribe(data => {  this.bookingDetailsbyemail$ = data;});
   this.bookingDetailsbyemail$=this.service.getBookingDetailsbyemail(value.email);
    //console.log()
    this.isVisiblebyEmail=true;
  }
  ngOnInit(): void {
    this.formReturnData=new FormGroup({
      
      email: new FormControl("kalai@gmail.com")
         })

     //console.log(this.bookingDetails$);
     this.bookingDetails$=this.service.getBookingDetails(this.formReturnData.value);
     this.bookingDetailsbyemail$=this.service.getBookingDetailsbyemail(this.formReturnData.value);
     
  };
 
    public deletebyEmail(data:any):void{
      console.log(data);
      this.service.DeleteBookingDetails(data).subscribe(result=>{
        alert("Deleted Successfully")
        //console.log(this.pnr);
     });
     window.location.reload()
      } 
     
      public openPDF(): void {
        let DATA: any = document.getElementById('htmlData');
        html2canvas(DATA).then((canvas) => {
          let fileWidth = 208;
          let fileHeight = (canvas.height * fileWidth) / canvas.width;
          const FILEURI = canvas.toDataURL('image/png');
          let PDF = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
          PDF.save('ticket-detail.pdf');
        });
      }

  

  
  
  
  }
  

  