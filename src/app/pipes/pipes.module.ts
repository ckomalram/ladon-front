import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinarrayPipe } from './joinarray.pipe';



@NgModule({
  declarations: [JoinarrayPipe],
  imports: [
    CommonModule
  ],
  exports:[JoinarrayPipe]
})
export class PipesModule { }
