import { Routes, RouterModule } from "@angular/router";
import { CateogryComponent } from "./cateogry.component";
import { EditcateogryComponent } from "./editcateogry/editcateogry.component";

const arr:Routes=[
{path:'',
children:[
{path:'',component:CateogryComponent},
{path:'edit/:cat_id',component:EditcateogryComponent}
]}
];

export const cat_routing=RouterModule.forChild(arr)