import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../todo.service';
import { task } from '../tasks'

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  id:number;
  title:string;
  status:string;
  id1:number;
  arr1:string[]=[
    'pending',
    'done'
  ];
  onSave(){
    this._up.UpdateTask(new task(this.id,this.title,this.status)).subscribe(
      (data:any)=>{
        this._route.navigate(['/'])
      }
    );
  }


  constructor(private act_route:ActivatedRoute,private _up:TodoService,private _route:Router) { }

  ngOnInit() {
    this.id1=this.act_route.snapshot.params['id'];
    this._up.getTaskById(this.id1).subscribe(
      (data:task[])=>{
        this.id=data[0].id;
        this.title=data[0].title;
        this.status=data[0].status;
      }
    );
  }

}
