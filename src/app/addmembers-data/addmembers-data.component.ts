import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { SocietyManagementService} from '../society-management.service';
@Component({
  selector: 'app-addmembers-data',
  templateUrl: './addmembers-data.component.html',
  styleUrls: ['./addmembers-data.component.css']
})
export class AddmembersDataComponent implements OnInit {
  
 
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private societyServices: SocietyManagementService ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
       sMId : ['', Validators.required ],
       personName : ['', Validators.required ],
       flatNumber : ['', Validators.required ],
       fMemberName: ['', Validators.required ],
       mobileNumber : ['', Validators.required ],
       hContactNumber : ['', Validators.required ],
       role : ['', Validators.required ]
    });
  }
  ngOnInit(): void {
  }

  addMembers(sMId, personName, flatNumber, fMemberName, mobileNumber, hContactNumber, role)
  {
    this.societyServices.addMembers(sMId, personName, flatNumber, fMemberName, mobileNumber, hContactNumber, role);
  }

}
