import { Component, OnInit } from '@angular/core';
import { student } from './s1';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  rno:number;
  name:string;
  result:string;
  mobile:string;
  g1:string;
  op1:string;
  fees:number;

      arr:student[]=[
        new student(1,'vidhi','pass','988888888','female','abad',8000),
        new student(2,'hetvee','pass','89999990','female','baroda',12000),
        new student(3,'dhruvi','fail','78888888','female','pune',9000)
      ];
      arr1:string[]=[
        'abad',
        'surat',
        'baroda',
        'rajkot'
      ];
      onDelete(i)
      {
        this.arr.splice(i,1)
      }
      onUpdate(item:student)
      {
        if(item.result=='pass')
        {
          item.result='congo';
        }
        else{
          item.result='work hard';
        }
      }
      onAdd()
      {




        this.arr.push(new student(this.rno,this.name,this.result,this.mobile,this.g1,this.op1,this.fees))
       }
  constructor() { }

  ngOnInit() {
  }

}
