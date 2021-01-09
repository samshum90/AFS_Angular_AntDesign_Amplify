import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [UsersComponent, EmployeesComponent, HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
