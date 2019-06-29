import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { task } from './todo/tasks';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url:string="http://localhost:3000/task/"
  private url1:string="http://localhost:3000/todo/";
  constructor(private _http:HttpClient) {

   }
   getAlltask(){
    return this._http.get(this.url)

   }
   getTaskById(id:number){
      return this._http.get(this.url+id)
   }
   addTask(item:task){
     let body=JSON.stringify(item)
     let _abc=new HttpHeaders().set('Content-Type','application/json')
     return this._http.post(this.url,body,{headers:_abc});
   }
   DeleteTask(item:task){
     let _abc=new HttpHeaders().set('Content-Type','application/json')
     return this._http.delete(this.url+item.id,{headers:_abc});
   }
   UpdateTask(item:task){
    let body=JSON.stringify(item)
    let _abc=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.url+item.id,body,{headers:_abc});
  }
  deleteAll(item:task[]){
    let body=JSON.stringify(item)
    let _abc=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.url1,body,{headers:_abc});
  }
}


