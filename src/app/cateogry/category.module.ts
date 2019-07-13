import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CateogryComponent } from "./cateogry.component";
import { EditcateogryComponent } from "./editcateogry/editcateogry.component";
import { MaterialModule } from "../material.module";
import { cat_routing } from "./category.routing";

@NgModule({
    declarations:[
        CateogryComponent,
        EditcateogryComponent

    ],
    imports:[
        CommonModule,
        FormsModule,
        cat_routing
    ]

})
export class CategoryModule{

}