import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('',Validators.required),
  });

  submitted: boolean | undefined

  constructor(private service: LoginService, private router:Router) {}
  
  signIn():void{
    this.service.signIn(this.loginForm.value).subscribe((res: any) => {
  //      this.submitted = true;
  // if(this.loginForm.invalid){
  //   return;}
  

this.loginForm.reset();
this.router.navigate(['home']);

    });
  }



}
