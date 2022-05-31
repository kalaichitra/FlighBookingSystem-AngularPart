import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginName:any;
  formReturnData:any;
  obj:any;
   value:any;
   role:any;
     constructor(obj:AirlineService,private activatedroute: ActivatedRoute, private router:Router) { 
     this.obj=obj;
     
   }
   public gotoDynamic() {
    
    
  }
   onClickSubmit(value:any){
     this.obj.loginCheck(value.userName,value.passWord).subscribe((data:any)=>{
      
       this.loginName=data.userName;
       this.role= data.role;
       alert("Welcome "+ data.userName + "!!!!!")
       console.log(data.role);
       const now= new Date();  
       const expirationTime = new Date(now.getTime()+data.expires_in*1000); 
       localStorage.setItem('token',data.access_token);
       localStorage.setItem('expiration', expirationTime.toISOString());
       localStorage.setItem('username',data.userName);
       localStorage.setItem('email',data.email);
       if(data.role==1)
       {
       this.router.navigate(['/admin']); 
       }
       else
       {
        this.router.navigate(['/user']); 
       }
     })
     
   }

   public logout() {  
     
    this.clearAuthData();  
    //clearTimeout(this.tokenTimer);  
  }  
  private clearAuthData() {  
    localStorage.removeItem("token");  
    localStorage.removeItem("expiration");  
  }  
   ngOnInit(): void {
    this.formReturnData=new FormGroup({
      userName: new FormControl("admin@gmail.com"),
      passWord: new FormControl("1234")
    })
   };
  
     

}
