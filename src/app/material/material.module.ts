import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';






@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule,
     MatSidenavModule, MatButtonModule, MatIconModule,
      MatDividerModule,MatInputModule,MatTableModule,MatDialogModule,MatFormFieldModule,MatCardModule
      ,NgxMatFileInputModule
  ],
  exports: [
    MatToolbarModule, MatSidenavModule,
     MatButtonModule, MatIconModule, MatDividerModule,
     MatInputModule,MatTableModule,MatDialogModule,MatFormFieldModule,MatCardModule
     ,NgxMatFileInputModule
  ]
})
export class MaterialModule { }
