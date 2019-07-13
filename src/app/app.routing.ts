import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { EmployeeComponent } from './employee/employee.component';


const arr:Routes=[
{path:'',component:EmployeeComponent},
{path:'todo',component:TodoComponent},
{path:'product',loadChildren:'./product/product.module#ProductModule'},
{path:'student',loadChildren:'./student/student.module#StudentModule'},
{path:'cateogry',loadChildren:'./cateogry/category.module#CategoryModule'},
{path:'edittodo/:id',component:EdittodoComponent},
{path:'employee',component:EmployeeComponent}

];
export const routing=RouterModule.forRoot(arr,{preloadingStrategy:PreloadAllModules})

