import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }  from 'src/environments/environment'
import { tap } from 'rxjs';
import { AuthToken } from '../interface/authToken.interface';
import { User } from '../interface/user.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post<AuthToken>(`${this.apiUrl}/auth/login`,
    {
      username: email,
      password: password
    }).pipe(
      tap((token:AuthToken)=>{
        localStorage.setItem('token',token.token);
      })
    )
    ;
  }

  signup(usuario: User){
    return this.http.post(`${this.apiUrl}/users`,usuario);
  }
}
