import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor() { }

  employee1:Employee = new Employee(1,'fazil',9999);
  employee2:Employee = new Employee(2,'bubbly',99999);

  employees:Employee[]=[this.employee1,this.employee2];

  ngOnInit(): void {
  }

  allEmployees():Employee[]{
    return this.employees;
  }

}
