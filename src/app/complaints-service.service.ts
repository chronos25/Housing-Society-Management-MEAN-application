import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ComplaintsServiceService {
  url = 'http://localhost:3000/complaint';
  constructor(private http: HttpClient) { }

  addComplaint(sMId, sub, compBody){
    const obj = {
      societyMemberId: sMId,
     subject: sub,
     complaintBody: compBody
    };
    this.http.post(`${this.url}/addComplaint`, obj)
    .subscribe(res =>
      { 
       console.log(obj);
       console.log('Post Request Done');
    });
  }

viewComplaints()
{
    return this.http.get(`${this.url}/viewComplaints`);
  }

}
