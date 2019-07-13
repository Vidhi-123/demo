import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { StudentComponent } from "./student.component";
import { EditstudentComponent } from "./editstudent/editstudent.component";
import { MaterialModule } from "../material.module";
import { stu_routing } from "./student.routing";


@NgModule({

    declarations:[
        StudentComponent,
        EditstudentComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        MaterialModule,
        stu_routing
    ]

})

export class StudentModule{}