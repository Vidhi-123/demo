import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ProductComponent } from "./product.component";
import { EditproductComponent } from "./editproduct/editproduct.component";
import { MaterialModule } from "../material.module";
import { pro_routing } from "./product.routing";

@NgModule({

    declarations:[
        ProductComponent,
        EditproductComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        MaterialModule,
        pro_routing
        
    ]

})

export class ProductModule{}