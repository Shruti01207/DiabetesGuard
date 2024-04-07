import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { SignupRequest } from '../models/signup-request.model';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  $user = new BehaviorSubject<User | undefined>(undefined);
  patientId:string="";
  constructor(private route: Router) { }

  private http = inject(HttpClient);
  private cookieService = inject(CookieService);

  login(request: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/Auth/login`, {
      
      email: request.email,
      password: request.password
    });
  }
  setAuthCookieAndUser(response: LoginResponse) {
    this.cookieService.set('Authorization', `Bearer ${response.token}`,
      undefined, '/', undefined, true, 'Strict');

    this.setUser({
      email: response.email,
      roles: response.roles,
      userName:response.userName
    });

  }

  setUser(user: User): void {
    this.$user.next(user);// new values will
    // be emitted to any suscriber of this observable
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-roles', user.roles.join(','));
    localStorage.setItem('username',user.userName)
  }

  user(): Observable<User | undefined> {
    return this.$user.asObservable()
  }

  logOut(): void {
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);
    this.route.navigateByUrl("/auth");
  }


  signUp(request: SignupRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Auth/register`, request);
  }

  getUser(): User | undefined {

    const email = localStorage.getItem("user-email");
    const roles = localStorage.getItem("user-roles");
    const userName= localStorage.getItem("username")
    if (email && roles) {
      const user: User = {
        email: email,
        roles: roles.split(','),
        userName: userName as string
      };
      return user;
    }

    return undefined;

  }



}
