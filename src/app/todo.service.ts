import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { task } from './todo/tasks';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url:string="http://localhost:3000/todo/"
  constructor(private _http:HttpClient) {

   }
   getAlltask(){
    return this._http.get(this.url)

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
}


