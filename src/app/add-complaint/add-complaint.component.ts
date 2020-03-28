import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ComplaintsServiceService} from '../complaints-service.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private complaintServices: ComplaintsServiceService ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
       societyMemberId : ['', Validators.required ],
       subject: ['', Validators.required],
       complaintBody: ['', Validators.required]

    });
  }
  ngOnInit(): void {
  }

  addComplaint(societyMemberId,subject,complaintBody)
  {
    this.complaintServices.addComplaint(societyMemberId, subject, complaintBody );
  }

}
