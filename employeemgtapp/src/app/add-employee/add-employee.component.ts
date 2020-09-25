import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee:Employee;

  constructor() { 
  }

  addEmployee(form:any){
    let data = form.value;
    let name:string = data.name;
    let salary:number = data.salary;
    this.employee = new Employee(-1,name,salary);
  }

}
