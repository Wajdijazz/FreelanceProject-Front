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
    this.http.post(this.personUrl, data).subscribe(
      res => {
      }
    );
  }

  updatePerson(data : Person) {
    this.http.put(this.personUrl, data).subscribe(
      res => {
      }
    );
  }
   
  getAllPersons(companyId : Number) {
    return this.http.get(this.personUrl+`${companyId}`);
  }

  getPersonListToAffectToUsers(companyId : Number) {
    return this.http.get(this.personUrl+`personList/${companyId}`);
  }

  deletePerson(personId: Number) {
    this.http.delete(this.personUrl+`${personId}`)
    .subscribe(
        res => {
        }
    );
  }


}
