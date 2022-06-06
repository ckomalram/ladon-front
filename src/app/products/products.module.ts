import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';
import { EditComponent } from './pages/products/edit/edit.component';
import { FormComponent } from './pages/products/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [ProductsComponent, EditComponent, FormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule, MaterialModule, PipesModule, ReactiveFormsModule, ToastrModule.forRoot(),
  ]
})
export class ProductsModule { }
