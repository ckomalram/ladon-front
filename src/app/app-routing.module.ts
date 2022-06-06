import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
  // {
  //   path: '**',
  //   loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
