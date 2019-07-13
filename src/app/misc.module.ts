import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { T1Component } from "./t1/t1.component";
import { TwobindComponent } from "./twobind/twobind.component";
import { D1Component } from "./d1/d1.component";
import { CalcComponent } from "./calc/calc.component";
import { MaterialModule } from "./material.module";
import { Demo11Component } from './demo11/demo11.component';

@NgModule({

    declarations:[
        T1Component,
        TwobindComponent,
        D1Component,
        CalcComponent,
        Demo11Component
    ],
    imports:[
        CommonModule,
        FormsModule,
        MaterialModule
    ]
})

export class MiscModule{}