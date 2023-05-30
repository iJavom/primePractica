import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, 
    AuthRoutingModule, 
    CardModule, 
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule,
    ButtonModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule {}
