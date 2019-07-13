import { Component, OnInit } from '@angular/core';
import { product } from './pr';
import { ProductService } from '../product.service'
import { Router } from '@angular/router';
import { EditproductComponent } from './editproduct/editproduct.component';

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
    selectedFile:File=null;


       onDelete(item)
       {
         this._xyz.DeleteTask(item).subscribe(
           (data:any)=>{
              this.arr.splice(this.arr.indexOf(item),1);
           }
         );

       }








onUpdate(item:product)
{
  this._route.navigate(['/product/edit',item.id]);
}
onAdd()
{
  const fd=new FormData();
  fd.append('id',this.id.toString());
  fd.append('name',this.name);
  fd.append('price',this.price.toString());
  fd.append('image',this.selectedFile,this.selectedFile.name);
  fd.append('mfg',this.mfg);
  fd.append('soh',this.soh.toString());

  this._xyz.addProduct(fd).subscribe(
    (data:any)=>{
      this.arr.push(new product(this.id,this.name,this.price,this.image,this.mfg,this.soh));
    }
  );




   }
   onChange(value)
   {
     this.selectedFile=<File>value.target.files[0];
   }
constructor(private _xyz:ProductService,private _route:Router) { }

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

