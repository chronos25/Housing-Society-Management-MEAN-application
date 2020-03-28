import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from '../bill/add/add.component';
import {ViewComponent} from '../bill/view/view.component';

const routes: Routes = [
  {
    path:'addBills',
    component: AddComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
