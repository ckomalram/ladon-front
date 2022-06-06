import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import * as Sentry from '@sentry/browser';
import {environment} from '../../environments/environment';
import { createResponse, Product, productResponse, updateResponse } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  getProducts() {
    return this.http.get<productResponse[]>(`${environment.url_api}/api/v1/products/`);
  }

  get(id: number){
    return this.http.get<Product>(`${environment.url_api}/api/v1/products/${id}`);
  }

  create(product: Product) {
    return this.http.post<createResponse>(`${environment.url_api}/api/v1/products/`, product);
  }

  update(id: number, changes: Partial<Product>) {
    return this.http.patch<updateResponse>(`${environment.url_api}/api/v1/products/${id}`, changes)
    .pipe(
      catchError(this.handleError),
    );
  }

  delete(id: string) {
    return this.http.delete(`${environment.url_api}/api/v1/products/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error);
    Sentry.captureException(error);
    return throwError('ups algo salio mal al ejecutar la acción, volver a intentar.');
  }
}
