import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }
   
  private providerUrl = `${config.apiUrl}/provider/`;
  
  getAllProviders(companyId : Number) {
    return this.http.get(this.providerUrl+`${companyId}`);
  }

  addProvider(data: any) {
    this.http.post(this.providerUrl, data)
        .subscribe(
            res => {
        }
    );
  }

  updateProvider(data: any) {
    this.http.put(this.providerUrl, data)
        .subscribe(
            res => {
        }
    );
  }

  deleteProvider(providerId: Number) {
    this.http.delete(this.providerUrl+`${providerId}`)
        .subscribe(
            res => {
            }
        );
  } 
  

}
