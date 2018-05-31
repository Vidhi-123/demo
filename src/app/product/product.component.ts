import { Component, OnInit } from '@angular/core';
import { product } from './pr';
import { parse } from 'querystring';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})




  export class ProductComponent implements OnInit {
    id:number;
    name:string;
    price:number;
    image:string="../assets/s1.jpg";
    mfg:string;
    soh:number;
    arr:product[]=[
      new product(1,'ac',10000,'','abc',20),
      new product(2,'tv',20000,'','lmn',10),
      new product(3,'fr',90000,'','xyz',40)
    ];
    arr1:number[]=[];
    no1:number;

    onAdd()
    {
      this.arr.push(new product(this.id,this.name,this.price,this.image,this.mfg,this.soh));
    }
    onDelete(i)
{
  this.arr.splice(i,1);
}
onUpdate(item:product)
{
  if(item.soh>10)
{
item.soh=40

}
}

  ngOnInit() {
    for(let no1 =1;no1<=50;no1++)
    {
      this.arr1.push(no1);
    }
  }

}

