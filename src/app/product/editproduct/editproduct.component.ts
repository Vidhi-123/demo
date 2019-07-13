import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { product } from '../pr';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id1:number;
  id:number;
  name:string;
  price:number;
  image:string;
  mfg:string;
  soh:number;
  arr1:number[]=[];
  no1:number;
  onSave(){
    this._up.UpdateProduct(new product(this.id,this.name,this.price,this.image,this.mfg,this.soh)).subscribe(
      (data:any)=>{
        this._route.navigate(['/product'])
      }
    )
  }
  constructor(private act_route:ActivatedRoute,private _up:ProductService,private _route:Router) { }

  ngOnInit() {
    this.id1=this.act_route.snapshot.params['pid'];
    this._up.getProductById(this.id1).subscribe(
      (data:product[])=>{
        this.id=data[0].id;
        this.name=data[0].name;
        this.price=data[0].price;
        this.image=data[0].image;
        this.mfg=data[0].mfg;
        this.soh=data[0].soh;
      }
    );


  for(let no1=1;no1<=50;no1++)
    {
      this.arr1.push(no1);
    }

}
}
