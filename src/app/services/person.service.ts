import { Injectable } from '@angular/core';
import { config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  
  private personUrl = `${config.apiUrl}/person/`;

  constructor(private http: HttpClient) { }

  savePerson(data : Person) {
    this.http.post(this.personUrl, data);
  }
}
