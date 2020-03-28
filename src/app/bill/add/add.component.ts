import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {BillsServiceService} from '../../bills-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private billServices: BillsServiceService ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      societyMemberId : ['', Validators.required ],
       electric: ['', Validators.required],
       management: ['', Validators.required]

    });
  }
  ngOnInit(): void {
  }

  addBill(societyMemberId,electric, management)
  {
    this.billServices.addBill(societyMemberId, electric, management );
  }


}
