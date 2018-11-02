import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable } from 'rxjs';



@Injectable()
export class EmployeeServiceService {

  private _url: string = "/assets/data/employee.json";

  constructor(private http: HttpClient) { }

  public GetEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this._url);
  }

  

}
