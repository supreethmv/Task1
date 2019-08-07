import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  private _url: string = "/assets/sample2.json";
  constructor(private http:HttpClient) { }

  getEmps():Observable<IEmp[]>{
    return this.http.get<IEmp[]>(this._url);
  }
}