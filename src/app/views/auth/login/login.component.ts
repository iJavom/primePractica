import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private _authService : AuthService,
    private router : Router
  ) { 
    this.loginForm = this.formBuilder.group({
      user: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      pass: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/main']);
    }
  }

  iniciarSesion(){
    console.log(this.user?.value);
    console.log(this.pass?.value);
    this._authService.login(this.user?.value,this.pass?.value).subscribe({
      next: (data)=>{
        if(localStorage.getItem('token')){
          this.router.navigate(['/main']);
        }
      },
      error: (errorMensaje) =>{
        console.log(errorMensaje);
        alert('Fallo el logeo');
      }
      
    });
  }

  get user(){
    return this.loginForm.get('user');
  }

  get pass(){
    return this.loginForm.get('pass');
  }

}
