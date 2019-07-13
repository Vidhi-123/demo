import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule,MatFormFieldControl, MatPaginatorModule,MatProgressSpinnerModule, MatSortModule, MatCardModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from "@angular/common";

@NgModule({
imports:[
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatRadioModule
],
exports:[    
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatRadioModule
]
})

export class MaterialModule{}