import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header.component';


import { MiscModule } from './misc.module';
import { TodoModule } from './todo/todo.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    MiscModule,
    TodoModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
