import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cateogry } from './cateogry/cateogry';

@Injectable({
  providedIn: 'root'
})
export class CateogryService {
  url:string="http://localhost:3000/cateogry/"
  constructor(private _http:HttpClient) { }
  getAllTask()
  {
    return this._http.get(this.url)
  }
  getCateogryById(id:number){
    return this._http.get(this.url+id)
  }
  addCateogry(item:cateogry){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteCateogry(item:cateogry){

    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.cat_id,{headers:head1});
  }
  UpdateCateogry(item:cateogry){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.cat_id,body,{headers:head1});
  }
}
