import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentServiceService } from '../department-service.service';

@Component({
  selector: 'app-department-detail',
  template: `
    <ul> 
      <li *ngFor="let department of departments"> <span> {{department.name}}  </span></li>
    </ul>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public idDepartment;
  public departments = [];
  constructor(private route: ActivatedRoute, private _departmentService: DepartmentServiceService) { }

  ngOnInit() {

      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.idDepartment = id;
      this._departmentService.GetDepatments().subscribe(Data => this.departments = Data);
  }


/*public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this._employeeService.GetEmployee().subscribe(Data => this.employees = Data , erreur => this.errorMsg = erreur);
  }*/ 



}
