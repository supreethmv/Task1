import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  public emps = [];

  constructor(private _empservice:EmpService ) { }

  ngOnInit() {
    this._empservice.getEmps().subscribe(data => this.emps = data);
  }

}
