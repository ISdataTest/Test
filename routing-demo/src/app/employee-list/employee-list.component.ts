import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <ul> 
      <li *ngFor="let employee of employees ; index as i"> <span > {{employees[i].id}} - {{employees[i].name}} - {{employees[i].age}} </span></li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public idEmployee;
  public employees = [];
  

  constructor(private route: ActivatedRoute, private _employeeService: EmployeeServiceService) { }

  ngOnInit() {

      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.idEmployee = id;
      this._employeeService.GetEmployees().subscribe(Data => this.employees = Data);
  }


/*public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this._employeeService.GetEmployee().subscribe(Data => this.employees = Data , erreur => this.errorMsg = erreur);
  }*/ 



}

