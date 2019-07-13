import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student.component";
import { EditstudentComponent } from "./editstudent/editstudent.component";

const arr:Routes=[
{path:'',
children:[
{path:'',component:StudentComponent},
{path:'edit/:rno',component:EditstudentComponent}
]}
];

export const stu_routing=RouterModule.forChild(arr)