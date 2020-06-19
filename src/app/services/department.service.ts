import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  private departmentUrl = `${config.apiUrl}/department/`;

  getAllDepartments() {
    return this.http.get(this.departmentUrl);
  }

  addDepartment(data: any) {
    this.http.post(this.departmentUrl, data)
        .subscribe(
            res => {
        }
    );
  }

  updateDepartment(data: any) {
    this.http.put(this.departmentUrl, data)
        .subscribe(
            res => {
        }
    );
  }

  deleteDepartment(departmentId: Number) {
    this.http.delete(this.departmentUrl+`${departmentId}`)
        .subscribe(
            res => {
            }
        );
  } 
  


}
