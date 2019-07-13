import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product.component";
import { EditproductComponent } from "./editproduct/editproduct.component";

const arr:Routes=[
{path:'',
children:[
{path:'',component:ProductComponent},
{path:'edit/:pid',component:EditproductComponent}
]}
];

export const pro_routing=RouterModule.forChild(arr)