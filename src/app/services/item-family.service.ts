import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ItemFamilyService {

  
  constructor(private http: HttpClient) { }

  private itemFamilyUrl = `${config.apiUrl}/item-Family/`;

  getAllItemFamily(companyId : Number) {
    return this.http.get(this.itemFamilyUrl+`${companyId}`);
  }

  addItemFamily(data: any) {
    this.http.post(this.itemFamilyUrl, data)
        .subscribe(
            res => {
        }
    );
  }

  updateItemFamily(data: any) {
    this.http.put(this.itemFamilyUrl, data)
        .subscribe(
            res => {
        }
    );
  }

  deleteItemFamily(itemFamilyId: Number) {
    this.http.delete(this.itemFamilyUrl+`${itemFamilyId}`)
        .subscribe(
            res => {
            }
        );
  } 
}
