import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
  {
    path:'employee-details',
    component:EmployeeDetailsComponent
  },
  {
    path: 'add-employee',
    component:AddEmployeeComponent
  },
  {
    path:'employee-list',
    component: ListEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
