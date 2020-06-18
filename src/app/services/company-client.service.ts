import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyClient } from '../models/company-client';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CompanyClientService {

  private companyClientUrl = `${config.apiUrl}/companyClient/`;
  companySaved: any;

  constructor(private http: HttpClient) { }

  saveCompanyClient(data: CompanyClient) {
    return this.http.post(this.companyClientUrl, data);
  }

  getAllCompaniesClients() {
    return this.http.get(this.companyClientUrl);
  }

  updateCompanyClient(data: CompanyClient, companyClientdId : Number) {
    this.http.put(this.companyClientUrl+`${companyClientdId}`, data)
        .subscribe(
            res => {
            }
        );
  }

  deleteCompanyClient(companyClientdId: Number) {
    this.http.delete(this.companyClientUrl+`${companyClientdId}`)
        .subscribe(
            res => {
            }
        );
  }  

}
