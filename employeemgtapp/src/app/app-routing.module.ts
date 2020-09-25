import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ProjectHomeComponent } from './project-home/project-home.component';

const routes: Routes = [
  {
    path:'app-project-home',
    component:ProjectHomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
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
