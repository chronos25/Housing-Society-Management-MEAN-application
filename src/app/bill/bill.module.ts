import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ViewComponent, AddComponent],
  imports: [
    CommonModule,
    BillRoutingModule,
    ReactiveFormsModule
  ]
})
export class BillModule { }
