import { Injectable } from '@angular/core';
import { config } from '../config';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private signupUrl = `${config.apiUrl}/user/register`;
  private updateUrl = `${config.apiUrl}/user/update`;

  
  constructor(private http: HttpClient) { }

  saveUser(data: User) {
    this.http.post(this.signupUrl, data)
        .subscribe(
            res => {
            }
        );
   }

   updatePasswordUser(data: any) {
    this.http.put(this.updateUrl, data)
        .subscribe(
            res => {
            }
        );
   }
}
