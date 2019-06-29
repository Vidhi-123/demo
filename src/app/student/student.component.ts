import { Component, OnInit,ViewChild } from '@angular/core';
import { student } from './s1';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { MatPaginator,MatTableDataSource } from '@angular/material';

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
      dataSource=new MatTableDataSource();
      @ViewChild(MatPaginator) paginator: MatPaginator;

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
        this._route.navigate(['/editstudent',item.rno])
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
  constructor(private _xyz:StudentService,private _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;

    this._xyz.getAllTask().subscribe(
      (data:student[])=>{
        this.arr=data
      }
    );
  }

}
