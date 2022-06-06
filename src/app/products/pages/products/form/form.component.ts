import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Product } from '../../../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  multiple=true;
  accept="image/png, image/jpeg";

  productForm = this.fb.group({
    name: [null, Validators.required],
    price: [null, Validators.required],
    image: [null],
    category: [null, Validators.required],
    quantity: [null, Validators.required],
    props: this.fb.array([])
  });

  constructor(private fb: FormBuilder,private _location: Location , private router: Router
    , private productsService : ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
   onSubmit() {
      let newProduct = this.productForm.value;
     newProduct.image='http://placeimg.com/640/480'
      this.productsService.create(newProduct).subscribe(rta => {
      // console.log(rta);
      this.toastr.success(rta.message, `Producto ${rta.data.name} creado!`);
      this.router.navigate(['products']);
    });


  }

  back() {
    this._location.back();
  }

  get props() {
    return this.productForm.get('props') as FormArray;
  }
  addProps() {
    this.props.push(this.fb.control(''));
  }


  deleteProps(index: any){
    // console.log(this.props);
    this.props.removeAt(index);

  }

}
