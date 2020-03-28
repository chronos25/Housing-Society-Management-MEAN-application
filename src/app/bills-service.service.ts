import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillsServiceService {
  url = 'http://localhost:3000/bill';
  constructor(private http: HttpClient) { }
  
  addBill(sMId, ele, mng){
    const obj = {
      societyMemberId: sMId,
     electric: ele,
     management: mng
    };
    console.log(obj);
    this.http.post(`${this.url}/addBill`, obj)
    .subscribe(res =>{
      console.log('Post Request Done');
    });
  }

  viewBills(){
    return this.http.get(`${this.url}/viewBills`);
  }
}
