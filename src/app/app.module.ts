import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmembersDataComponent } from './addmembers-data/addmembers-data.component';
import { GetmembersDataComponent } from './getmembers-data/getmembers-data.component';
import { UpdateMemberDataComponent } from './update-member-data/update-member-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddmembersDataComponent,
    GetmembersDataComponent,
    UpdateMemberDataComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
