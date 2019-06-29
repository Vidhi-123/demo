import { Component, OnInit } from '@angular/core';
import { cateogry } from './cateogry';
import { CateogryService } from '../cateogry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cateogry',
  templateUrl: './cateogry.component.html',
  styleUrls: ['./cateogry.component.css']
})
export class CateogryComponent implements OnInit {
  cat_id:number;
  cat_name:string;
  isactive:string;
  flag:boolean=false;
  arr:cateogry[]=[

  ];
  arr1:string[]=[
    'yes',
    'no'
  ];
  onClick()
  {
    if(this.flag)
    {
      this.flag=false
    }
    else
    {
    this.flag=true
    }
  }
  onUpdate(item:cateogry){
    this._route.navigate(['/editcateogry',item.cat_id])
  }
  onAdd()
      {
        this._xyz.addCateogry(new cateogry(this.cat_id,this.cat_name,this.isactive)).subscribe(
        (data:any)=>{
          this.arr.push(new cateogry(this.cat_id,this.cat_name,this.isactive));
        }
        );
      }
      onDelete(item)
      {
        this._xyz.deleteCateogry(item).subscribe(
          (data:any)=>{
             this.arr.splice(this.arr.indexOf(item),1);
          }
        );
        // this.arr.splice(i,1)
      }


  constructor(private _xyz:CateogryService,private _route:Router) { }

  ngOnInit() {
    this._xyz.getAllTask().subscribe(
      (data:cateogry[])=>{
        this.arr=data
      }
    );
  }


}
