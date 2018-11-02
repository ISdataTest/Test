import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './Department';
import { Observable } from 'rxjs';



@Injectable()
export class DepartmentServiceService {

  private _url: string = "/assets/data/departments.json";

  constructor(private http: HttpClient) { }

  public GetDepatments(): Observable<Department[]>
  {
    return this.http.get<Department[]>(this._url);
  }

  

}
