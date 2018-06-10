import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from './product/pr';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string="http://localhost:3000/product/"
  constructor(private _http:HttpClient) { }
  getAllTask()
  {
    return this._http.get(this.url);
  }
  addProduct(item:product){
    let body=JSON.stringify(item);
    let _abc=new HttpHeaders().set('Content-Type','application/json');
 return this._http.post(this.url,body,{headers:_abc});
  }
  DeleteTask(item:product){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.id,{headers:_abc});
  }
}

