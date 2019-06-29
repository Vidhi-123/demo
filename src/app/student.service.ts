import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { student } from './student/s1';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url:string="http://localhost:3000/student/"


  constructor(private _http:HttpClient) { }
  getAllTask()
  {
    return this._http.get(this.url)
  }
  getStudentById(rno:number){
    return this._http.get(this.url+rno)
  }
  addStudent(item:student){
    let body=JSON.stringify(item)
    let _abc= new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:_abc});

  }
  deleteStudent(item:student){
    let _abc= new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.rno,{headers:_abc})
  }
  UpdateStudent(item:student){
    let body=JSON.stringify(item)
    let _abc= new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.rno,body,{headers:_abc});

  }
}
