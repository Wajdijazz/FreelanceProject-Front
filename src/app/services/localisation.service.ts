import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {

  constructor(private http: HttpClient) { }

  private localisationUrl = `${config.apiUrl}/localisation/`;

  getAllLocalisations(companyId : Number) {
    return this.http.get(this.localisationUrl+`${companyId}`);
  }

  addLocalisation(data: any) {
    this.http.post(this.localisationUrl, data)
        .subscribe(
            res => {
        }
    );
  }

  updateLocalisation(data: any) {
    this.http.put(this.localisationUrl, data)
        .subscribe(
            res => {
        }
    );
  }

  deleteLocalisation(localistionId: Number) {
    this.http.delete(this.localisationUrl+`${localistionId}`)
        .subscribe(
            res => {
            }
        );
  } 

}
