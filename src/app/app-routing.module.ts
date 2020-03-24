import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddmembersDataComponent} from './addmembers-data/addmembers-data.component';
import {GetmembersDataComponent} from './getmembers-data/getmembers-data.component';
import {UpdateMemberDataComponent} from './update-member-data/update-member-data.component';
import {DashboardComponent} from './dashboard/dashboard.component';
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
    path:'society/getMember/:MemId',
    component:GetmembersDataComponent
  },
  {
    path: 'society/updateMember/:Memid',
    component: UpdateMemberDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
