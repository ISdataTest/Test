import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-employee',
  template: `
      <h2>employees</h2>
      <ul> {{ errorMsg }} </ul>
      <ul>
    <li *ngFor="let employee of employees">
      {{ employee.id }} - {{ employee.name }} - {{ employee.age }}
    </li>
    
  </ul>
  

  
  `,
  styles: [``]
})
export class EmployeeComponent implements OnInit {


  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this._employeeService.GetEmployee().subscribe(Data => this.employees = Data , erreur => this.errorMsg = erreur);
  }

}
