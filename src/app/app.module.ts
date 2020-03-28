import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmembersDataComponent } from './addmembers-data/addmembers-data.component';
import { GetmembersDataComponent } from './getmembers-data/getmembers-data.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SocietyManagementService} from './society-management.service';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import {AddComponent} from './bill/add/add.component';
import {ViewComponent} from './bill/view/view.component';
@NgModule({
  declarations: [
    AppComponent,
    AddmembersDataComponent,
    GetmembersDataComponent,
    DashboardComponent,
    AddComplaintComponent,
    ViewComplaintComponent,
    AddComponent,
    ViewComponent,
    ViewComplaintComponent,
    AddComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SocietyManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
