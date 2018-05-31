import { Component, OnInit } from '@angular/core';
import { task } from './tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tasks:task[]=[
  new task(1,'email','pending'),
  new task(2,'github','pending'),
  new task(3,'go for movie','done')
]
arr1:string[]=[
  'pending',
  'done'
];


  constructor() { }
onDelete(i)
{
  this.tasks.splice(i,1);
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
  this.tasks.push(new task(i,t,s))
}

  ngOnInit() {
  }

}
