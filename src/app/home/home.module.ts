import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NzTableModule, NzTableSortOrder } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    UsersComponent,
    EmployeesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzTableModule,
  ],
  exports: [
    UsersComponent,
    EmployeesComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
