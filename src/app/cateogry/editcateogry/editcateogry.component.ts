import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CateogryService } from '../../cateogry.service';
import { cateogry } from '../cateogry';

@Component({
  selector: 'app-editcateogry',
  templateUrl: './editcateogry.component.html',
  styleUrls: ['./editcateogry.component.css']
})
export class EditcateogryComponent implements OnInit {
  id:number;
  cat_id:number;
  cat_name:string;
  isactive:string;
  arr1:string[]=[
    'yes',
    'no'
  ];
  onSave(){
    this._up.UpdateCateogry(new cateogry(this.cat_id,this.cat_name,this.isactive)).subscribe(
      (data:any)=>{
        this._route.navigate(['/cateogry'])
      }
    );
  }


  constructor(private act_route:ActivatedRoute,private _up:CateogryService,private _route:Router) { }

  ngOnInit() {
    this.id=this.act_route.snapshot.params['cat_id'];
    console.log(this.id)
    this._up.getCateogryById(this.id).subscribe(
      (data:cateogry[])=>{
        this.cat_id=data[0].cat_id;
        console.log(this.cat_id)
        this.cat_name=data[0].cat_name;
        console.log(this.cat_name)
        this.isactive=data[0].isactive;
        console.log(this.isactive)

      }
    );
  }

}
