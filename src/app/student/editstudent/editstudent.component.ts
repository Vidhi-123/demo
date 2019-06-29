import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { StudentService } from '../../student.service';
import { student } from '../s1';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  rno1:number;
  rno:number;
  name:string;
  result:string;
  mobile:string;
  gender:string;
  city:string;
  fees:number;
  arr1:string[]=[
    'abad',
    'surat',
    'baroda'
  ]
  onSave(){
    this._up.UpdateStudent(new student(this.rno,this.name,this.result,this.mobile,this.gender,this.city,this.fees)).subscribe(
      (data:any)=>{
        this._route.navigate(['/student']);
      }
    );
  }

  constructor(private act_route:ActivatedRoute,private _up:StudentService,private _route:Router) { }

  ngOnInit() {
    this.rno1=this.act_route.snapshot.params['rno'];
    this._up.getStudentById(this.rno1).subscribe(
      (data:student[])=>{
        this.rno=data[0].rno;
        this.name=data[0].name;
        this.result=data[0].result;
        this.mobile=data[0].mobile;
        this.gender=data[0].gender;
        this.city=data[0].city;
        this.fees=data[0].fees;

      }
    );

  }

}
