import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { AirlineRegisterComponent } from './airline-register/airline-register.component';
import { AirlineMgmtComponent } from './Get-airline-Schedule/airline-mgmt.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AirlineInsertComponent } from './airline-insert/airline-insert.component';
import { InsertSchduleAirlineComponent } from './insert-schdule-airline/insert-schdule-airline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingInsertComponent } from './booking-insert/booking-insert.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CouponComponent } from './coupon/coupon.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingDetailsComponent,
    LoginComponent,
    AirlineRegisterComponent,
    AirlineMgmtComponent,
    SignUpComponent,
    AirlineInsertComponent,
    InsertSchduleAirlineComponent,
    SearchFlightsComponent,
    BookingInsertComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    CouponComponent,
    TicketDetailsComponent,
   
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgImageSliderModule
  
  ],
 
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }


