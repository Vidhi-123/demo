import { Component, OnInit } from '@angular/core';
import { employee } from './e1';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  arr:employee[]=[
    new employee(1,'heti','female','manager',78900),
    new employee(2,'dd','female','clerk',5623),
    new employee(3,'vd','female','personal',32156)
  ]
  onDelete(i)
  {
    this.arr.splice(i,1)
  }
  constructor() { }

  ngOnInit() {
  }

}
