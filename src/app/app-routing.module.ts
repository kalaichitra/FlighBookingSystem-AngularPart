import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
//import { AirlineMgmtComponent } from './Get-airline-Schedule/airline-mgmt.component';
import { AirlineRegisterComponent } from './airline-register/airline-register.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AirlineInsertComponent } from './airline-insert/airline-insert.component';
import { AirlineMgmtComponent } from './Get-airline-Schedule/airline-mgmt.component';
import { InsertSchduleAirlineComponent } from './insert-schdule-airline/insert-schdule-airline.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { BookingInsertComponent } from './booking-insert/booking-insert.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CouponComponent } from './coupon/coupon.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
const routers:Routes=[
  
    {path: 'login', component: LoginComponent},
    {path: 'booking-detail', component:BookingDetailsComponent},
    {path:'airline-schedule', component: AirlineMgmtComponent},
    {path:'airline-register', component: AirlineRegisterComponent},
    {path:'search-flights', component: SearchFlightsComponent},
    {path:'sign-up', component: SignUpComponent},
    {path:'airline-insert', component: AirlineInsertComponent},
    {path:'airline-schedule-insert', component: InsertSchduleAirlineComponent},
    {path:'booking-insert', component: BookingInsertComponent},
    {path:'home', component: HomeComponent},
    {path:'admin', component: AdminComponent},
    {path:'user', component: UserComponent},
    {path:'coupon', component: CouponComponent},
    {path:'ticket-details', component: TicketDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
    exports:[RouterModule]
    
  
})
export class AppRoutingModule { }
