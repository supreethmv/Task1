import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component implements OnInit {

  public emps = [];

  constructor(private _empservice:EmpService ) { }

  ngOnInit() {
    this._empservice.getEmps().subscribe(data => this.emps = data);
  }

}
