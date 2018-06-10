import { Component, OnInit } from '@angular/core';
import { product } from './pr';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-pro',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})




  export class ProductComponent implements OnInit {
    id:number;
    name:string;
    price:number;
    image:string;
    mfg:string;
    soh:number=1;
    arr:product[]=[

    ];
    arr1:number[]=[

    ];
    no1:number;


       onDelete(item)
       {
         this._xyz.DeleteTask(item).subscribe(
           (data:any)=>{
              this.arr.splice(this.arr.indexOf(item),1);
           }
         );

       }








// onUpdate(item:product)
// {
//   if(item.soh>0)
// {
// item.soh+=1

// }
// }
onAdd()
{

  this._xyz.addProduct(new product(this.id,this.name,this.price,this.image,this.mfg,this.soh)).subscribe(
    (data:any)=>{
      this.arr.push(new product(this.id,this.name,this.price,this.image,this.mfg,this.soh));
    }
  );




   }
constructor(private _xyz:ProductService) { }

  ngOnInit() {
    for(let no1=1;no1<=50;no1++)
    {
      this.arr1.push(no1);
    }
    this._xyz.getAllTask().subscribe(
      (data:product[])=>{
        this.arr=data
        console.log(this.arr);
      }
    );

  }


}

