import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './home/users/users.component';
import { EmployeesComponent } from './home/employees/employees.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent, },
  {
    path: 'home',
    children: [
      {
        path: 'users', // child route path
        component: UsersComponent, // child route component that the router renders
      },
      {
        path: 'employees',
        component: EmployeesComponent, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
