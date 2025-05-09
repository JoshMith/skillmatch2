import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://51.20.35.31:3000/api/auth'

  constructor(private http: HttpClient) { }



  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data, { withCredentials: true });
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data, { withCredentials: true });
  }


  logoutUser(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
  }

  registerJobseeker(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register-jobseeker`, data, { withCredentials: true });
  }

  registerEmployer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register-employer`, data, { withCredentials: true });
  }


}
