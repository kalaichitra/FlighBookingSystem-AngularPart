import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  
  forecast: any;
  readonly APIUrl='http://localhost:9000';
  constructor(private http: HttpClient) {
   
}

//Getting booked ticket details by pnr
public getBookingDetails(pnr:string): Observable<any> {
  return this.http.get<any>(this.APIUrl +'/api/v1.0/flight/BookingDetailbyPNR?pnr='+pnr);
}
//insert booking Details
public BookTicket(ticketDetails:any): Observable<any> {
  return this.http.post(this.APIUrl +'/api/v1.0/flight/Booking',ticketDetails);
}
// delete booking Details
public DeleteBookingDetails(pnr: string): Observable<any>{
  return this.http.delete(this.APIUrl +'/api/v1.0/flight/Booking/delete/' + pnr);
  }
  //Get bookingdetails by email
public getBookingDetailsbyemail(email: string): Observable<any>{
  return this.http.get<any>(this.APIUrl +'/api/v1.0/flight/Booking/GetbyEmailID?email=' + email);
  }
//Check login details
public loginCheck(userName:string, passWord:string): Observable<any> {
  return this.http.get(this.APIUrl +'/api/v1.0/flight/login?emailID='+userName+'&password='+passWord);
}
//register user
public registerUser(AddUser: any): Observable<any>{
  return this.http.post(this.APIUrl +'/api/v1.0/flight/login',AddUser);
  }
//insert register Airline
public registerAirline(Addairline: any): Observable<any>{
  return this.http.post(this.APIUrl +'/api/v1.0/flight/Airline/Register',Addairline);
  }
  //edit register Airline
public EditRegisterAirline(Addairline: any): Observable<any>{
  return this.http.post(this.APIUrl +'/api/v1.0/flight/Airline/Register',Addairline);
  }
    //Block/unblock register Airline
public ActiveRegisterAirline(Addairline: any): Observable<any>{
  return this.http.put(this.APIUrl +'/api/v1.0/flight/Airline/Register',Addairline);
  }
  // delete airline
  public DeleteRegisterAirline(AirlineName: string): Observable<any>{
    return this.http.delete(this.APIUrl +'/api/v1.0/flight/Airline/Register/' + AirlineName);
    }
//get airline register
GetAirlineRegisterDetails(): Observable<any> {
  return this.http.get(this.APIUrl +'/api/v1.0/flight/Airline/Register');
}
//Check airline schedule
GetAirlineSchedule(): Observable<any> {
  return this.http.get(this.APIUrl +'/api/v1.0/flight/Airline/Schedule');
}
//insert airline schedule
public ScheduleAirline(ScheduleAirline:any): Observable<any> {
  return this.http.post(this.APIUrl +'/api/v1.0/flight/Airline/Schedule',ScheduleAirline);
}
//edit airline schedule
public EditScheduleAirline(ScheduleAirline:any): Observable<any> {
  return this.http.post(this.APIUrl +'/api/v1.0/flight/Airline/Schedule',ScheduleAirline);
}
//Getting search flights details
public getSearchDetails(searchInput:any): Observable<any> {
  return this.http.post(this.APIUrl +'/api/v1.0/flight/Search',searchInput);
}
//Getting search flights details RabbitMQ
public getSearchDetailsRabbitMQ(searchInput:any): Observable<any> {
  return this.http.post(this.APIUrl +'/api/v1.0/flight/Search/RabbitMQ',searchInput);
}
//Getting Coupon details
public couponCheck(discount:string): Observable<any> {
  return this.http.get(this.APIUrl +'/api/v1.0/flight/coupon/getDetails?discount='+discount);
}
//Add Coupon details
public AddCoupon(couponDetails:any): Observable<any> {
  return this.http.post(this.APIUrl +'/api/v1.0/flight/coupon/addcoupon',couponDetails);
}



}