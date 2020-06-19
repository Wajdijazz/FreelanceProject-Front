import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { JwtHelperService } from '@auth0/angular-jwt';
import { config } from '../../config';
import { TokenStorageService } from './token-storage.service';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private loginUrl = `${config.apiUrl}/user/login`;
 
  constructor(private http: HttpClient, 
    private tokenStorage: TokenStorageService, 
    private jwtHelper: JwtHelperService) {
  }
 
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  public isAuthenticated(): boolean {
    const token = this.tokenStorage.getToken()
    return !this.jwtHelper.isTokenExpired(token);
  }
 
}