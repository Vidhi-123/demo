import { Component, OnInit } from '@angular/core';
import { task } from './tasks';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tasks:task[]=[

];
arr1:string[]=[
  'pending',
  'done'
];


  constructor(private _xyz:TodoService) { }
onDelete(item)
{
  this._xyz.DeleteTask(item).subscribe(
    (data:any)=>{
      this.tasks.splice(this.tasks.indexOf(item),1);
    }
  );
  // this.tasks.splice(i,1);
}
onUpdate(item:task)
{
  if(item.status=='done')
  {
    item.status='pending';
  }
  else
  {
    item.status='done';
  }
}
onAdd(i,t,s)
{
  this._xyz.addTask(new task(i,t,s)).subscribe(
    (data:any)=>{
        this.tasks.push(new task(i,t,s));
    }

  );





}


  ngOnInit() {

    this._xyz.getAlltask().subscribe(
      (data:task[])=>{
        this.tasks=data;
      }

    );



}
}
