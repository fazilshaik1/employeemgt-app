import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  employee:Employee;
  employee1:Employee= new Employee(1,'fazil',99999);
  employees:Employee[]=[this.employee1];

  ngOnInit(): void {
  }

  findEmployee(form:any){
    let data = form.value;
    let id = data.id;
    this.employee = this.findById(id);
  }

  allEmployees():Employee[]{
    return this.employees;
  }

  findById(id:number){
    for(let employee of this.employees){
      if(employee.id == id){
        return employee;
      }
    }
  }

}
