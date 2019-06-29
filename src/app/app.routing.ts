import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { CateogryComponent } from './cateogry/cateogry.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { EditcateogryComponent } from './cateogry/editcateogry/editcateogry.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';

const arr:Routes=[
{path:'',component:TodoComponent},
{path:'product',component:ProductComponent},
{path:'student',component:StudentComponent},
{path:'cateogry',component:CateogryComponent},
{path:'edittodo/:id',component:EdittodoComponent},
{path:'editproduct/:id',component:EditproductComponent},
{path:'editcateogry/:cat_id',component:EditcateogryComponent},
{path:'editstudent/:rno',component:EditstudentComponent}

];
export const routing=RouterModule.forRoot(arr)

