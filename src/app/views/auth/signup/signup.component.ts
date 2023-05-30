import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface/user.interface';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form : FormGroup;
  
  constructor(
    private formBuilder : FormBuilder,
    private _authService : AuthService,
    private router : Router
  ) { 
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  registrar(){
    const usuario : User = {
      username: this.user,
      email: this.email,
      password: this.pass,
      telefono: this.telefono,
      name: {
        firstname : this.nombre,
        lastname : this.apellido
      }
    }

    this._authService.signup(usuario).subscribe({
      next:(data)=>{
        alert('Registro exitoso');
        this.iniciarSesion(usuario);
      },
      error: (error)=>{
        alert('Error registrando');
      }
    });
  }

  iniciarSesion(usuario: User){
    this._authService.login(usuario.username, usuario.password).subscribe({
      next: ()=>{
        alert('Inicio de sesion exitoso');
        if(localStorage.getItem('token')){
          this.router.navigate(['/main']);
        }
      },
      error: ()=>{
        alert('Error iniciando sesion');
      }
    });
  }

  get user(){
    return this.form.get('user')?.value;
  }

  get pass(){
    return this.form.get('pass')?.value;
  }

  get email(){
    return this.form.get('email')?.value;
  }

  get nombre(){
    return this.form.get('nombre')?.value;
  }

  get apellido(){
    return this.form.get('apellido')?.value;
  }

  get telefono(){
    return this.form.get('telefono')?.value;
  }

}
