import { Component, OnInit } from '@angular/core';
import SocietyManagement from '../SocietyManagement';
import {SocietyManagementService} from '../society-management.service';
@Component({
  selector: 'app-getmembers-data',
  templateUrl: './getmembers-data.component.html',
  styleUrls: ['./getmembers-data.component.css']
})
export class GetmembersDataComponent implements OnInit {
  member: SocietyManagement[];

  constructor(private sms : SocietyManagementService) { }

  ngOnInit(): void {
    this.sms.getMember()
    .subscribe((data: SocietyManagement[]) => {
      console.log("data"+ data);
      this.member = data;
      console.log(this.member);
    });
  }

}
