import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocietyManagementService {
  url = 'http://localhost:3000/society';
  constructor(private http: HttpClient) { }
  
  addMembers(sMId, personName, flatNumber, fMemberName, mobileNumber, hContactNumber, role ){
    const obj = {
      societyMemberId: sMId,
      person_Name: personName,
      flat_Number: flatNumber,
      fMember_Name: fMemberName,
      mobile_Number: mobileNumber,
      homeContactNumber: hContactNumber,
      roles  : role
    };
    console.log(obj);
    this.http.post(`${this.url}/addMember`, obj)
    .subscribe(res =>
      {
      console.log('Post Request Done');
    });
  }
}
