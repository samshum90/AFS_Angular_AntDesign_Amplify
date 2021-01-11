import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';


@NgModule({
  declarations: [
    UsersComponent,
    EmployeesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzRadioModule,
  ],
  exports: [
    UsersComponent,
    EmployeesComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
