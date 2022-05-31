import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AirlineService } from '../airline.service';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
public formReturnData!:FormGroup;
form: FormGroup = new FormGroup({
  //fullname: new FormControl(''),
  Name: new FormControl(''),
  EmailIdId: new FormControl(''),
  password: new FormControl(''),
  //confirmPassword: new FormControl(''),
  //acceptTerms: new FormControl(false),
});
submitted = false;
constructor(private formBuilder: FormBuilder, private service:AirlineService,private activatedroute: ActivatedRoute, private router:Router) {}
ngOnInit(): void {
  this.form = this.formBuilder.group(
    {
      
      Name: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      EmailId: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    }
  );
}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

onSubmit(): void {
  this.submitted = true;
  if (this.form.invalid) {
    return;
  }
  else{
    console.log(JSON.stringify(this.form.value, null, 2));
    this.service.registerUser(this.form.value).subscribe(result=>{
      console.log(result);
      alert("logged in successfully "+ this.form.value.Name);
      const now= new Date();  
       const expirationTime = new Date(now.getTime()+result.expires_in*1000); 
       localStorage.setItem('token',result.access_token);
       localStorage.setItem('expiration', expirationTime.toISOString());
       localStorage.setItem('username',result.userName);
       localStorage.setItem('email',result.email);
       if(result.role==1)
       {
       this.router.navigate(['/admin']); 
       }
       else
       {
        this.router.navigate(['/user']); 
       }
    });
    
  }

  
  

}
onReset(): void {
  this.submitted = false;
  this.form.reset();
}
  
 

}
