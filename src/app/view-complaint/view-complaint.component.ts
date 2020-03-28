import { Component, OnInit } from '@angular/core';
import Complaints from '../complaints';
import {ComplaintsServiceService} from '../complaints-service.service';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {
  complaints: Complaints[];
  constructor( private cms : ComplaintsServiceService) { }

  ngOnInit(): void {
    this.cms.viewComplaints()
    .subscribe((data: Complaints[]) => {
      this.complaints = data;
      console.log(this.complaints);
    });
  }


}
