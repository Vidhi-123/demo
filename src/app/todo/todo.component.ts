import { Component, OnInit,ViewChild } from '@angular/core';
import { task } from './tasks';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { MatTableDataSource,MatPaginator, MatSort } from '@angular/material';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tasks:task[]=[

];
delarr:task[]=[

];
arr:task[]=[];
arr1:string[]=[
  'pending',
  'done'
];
i:number;


  displayedColumns: string[] = ['id', 'title', 'status','action','select'];

  id:number;
  title:string;
  status:string;

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }






  constructor(private _xyz:TodoService,private _route:Router) { }
onDelete(item)
{
  -this._xyz.DeleteTask(item).subscribe(
    (data:any)=>{
      this.tasks.splice(this.tasks.indexOf(item),1);

    }
  );
  // this.tasks.splice(i,1);
}
onUpdate(item:task)
{
this._route.navigate(['/edittodo',item.id])
}
onAdd()
{
  this._xyz.addTask(new task(this.id,this.title,this.status)).subscribe(
    (data:any)=>{
      console.log(data);
        this.tasks.push(new task(this.id,this.title,this.status));
    }

  );





}
onCheckChange(item:task){
  if(this.delarr.find(x=>x==item)){
    this.delarr.splice(this.delarr.indexOf(item),1);
  }
  else{
    this.delarr.push(item)
  }
  console.log(this.delarr);
}
onDel1(){
  this._xyz.deleteAll(this.delarr).subscribe((x:any)=>{
    console.log(this.arr);
    for(this.i=0;this.i<=this.delarr.length;this.i++){
      if(this.arr.find(x=>x==this.delarr[this.i])){
        console.log(this.delarr[this.i]);
        this.arr.splice(this.arr.indexOf(this.delarr[this.i]),1)

      }
    }
    console.log(this.arr);
    this.dataSource.data=this.arr
  });
}

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._xyz.getAlltask().subscribe(
      (data:task[])=>{
        this.tasks=data;
         this.arr=data;
        // this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.data=this.tasks;
        this.dataSource.data=this.arr;
        console.log(this.tasks)
      }

    );



}
}
