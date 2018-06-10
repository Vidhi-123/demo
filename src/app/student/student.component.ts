import { Component, OnInit } from '@angular/core';
import { student } from './s1';
import { StudentService } from '../student.service';

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
  g1:string='female';
  op1:string='abad';
  fees:number;

      arr:student[]=[

      ];
      arr1:string[]=[
        'abad',
        'surat',
        'baroda',
        'rajkot'
      ];
      flag:boolean=false;
      onDelete(item)
      {
        this._xyz.deleteStudent(item).subscribe(
          (data:any)=>{
             this.arr.splice(this.arr.indexOf(item),1);
          }
        );
        // this.arr.splice(i,1)
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
        this._xyz.addStudent(new student(this.rno,this.name,this.result,this.mobile,this.g1,this.op1,this.fees)).subscribe(
        (data:any)=>{
          this.arr.push(new student(this.rno,this.name,this.result,this.mobile,this.g1,this.op1,this.fees));
        }
        );





       }
       onClick()
       {
         if(this.flag)
         {
           this.flag=false
         }
         else
         {
         this.flag=true
         }
       }
  constructor(private _xyz:StudentService) { }

  ngOnInit() {

    this._xyz.getAllTask().subscribe(
      (data:student[])=>{
        this.arr=data
      }
    );
  }

}
