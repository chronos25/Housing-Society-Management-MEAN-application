import { Component, OnInit } from '@angular/core';
import {BillsServiceService} from '../../bills-service.service';
import Bill from '../../bill';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  bills: Bill[];
  constructor(private bss: BillsServiceService) { }

  ngOnInit(): void {
  this.bss.viewBills()
  .subscribe((data: Bill[]) => {
    console.log(data);
    this.bills = data;
    console.log(this.bills);
  });
  }


}
