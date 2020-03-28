import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddmembersDataComponent} from './addmembers-data/addmembers-data.component';
import {GetmembersDataComponent} from './getmembers-data/getmembers-data.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddComponent} from './bill/add/add.component';
import {ViewComponent} from './bill/view/view.component';
import {AddComplaintComponent} from './add-complaint/add-complaint.component';
import {ViewComplaintComponent} from './view-complaint/view-complaint.component';

const routes: Routes = [
  {
    path:'society/dashboard',
    component: DashboardComponent
  },
  {
    path:'society/addMember',
    component: AddmembersDataComponent
  },
  {
    path:'society/getMember',
    component:GetmembersDataComponent
  },
  {
    path: 'bill/addBill',
    component: AddComponent
  },
  {
    path: 'bill/viewBills',
    component: ViewComponent
  },
  {
    path:'complaint/addComplaint',
    component: AddComplaintComponent
  },
  {
    path:'complaint/viewComplaints',
    component: ViewComplaintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
