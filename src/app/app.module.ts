import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule,MatFormFieldControl, MatPaginatorModule,MatProgressSpinnerModule, MatSortModule, MatCardModule } from '@angular/material';


import { AppComponent } from './app.component';
import { D1Component } from './d1/d1.component';
import { CalcComponent } from './calc/calc.component';
import { TodoComponent } from './todo/todo.component';
import { TwobindComponent } from './twobind/twobind.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from "@angular/common/http";
import { CateogryComponent } from './cateogry/cateogry.component';
import { HeaderComponent } from './header.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { EditcateogryComponent } from './cateogry/editcateogry/editcateogry.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { T1Component } from './t1/t1.component'

@NgModule({
  declarations: [
    AppComponent,
    D1Component,
    CalcComponent,
    TodoComponent,
    TwobindComponent,
    StudentComponent,
    ProductComponent,
    EmployeeComponent,
    CateogryComponent,
    HeaderComponent,
    EdittodoComponent,
    EditproductComponent,
    EditcateogryComponent,
    EditstudentComponent,
    T1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
