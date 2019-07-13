import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { TodoComponent } from "./todo.component";
import { EdittodoComponent } from "./edittodo/edittodo.component";

@NgModule({

    declarations:[
        TodoComponent,
        EdittodoComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        MaterialModule
    ]

})

export class TodoModule{}