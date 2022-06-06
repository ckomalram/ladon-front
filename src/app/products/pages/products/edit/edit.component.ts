import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  multiple=false;
  accept="image/png, image/jpeg";

  productForm: FormGroup;
  id: number;

  constructor(    private formBuilder: FormBuilder,private _location: Location,
    private productsService: ProductService,
    private router: Router,private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) {
      this.buildForm();
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.get(this.id)
      .subscribe(product => {
        console.log(product);
        this.productForm.patchValue(product);
        product.props.forEach(element => {
          this.addPropstoEdit(element);
        });
      });
    });
  }


  private buildForm() {
    this.productForm = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      image: [null],
      category: [null, Validators.required],
      quantity: [null, Validators.required],
      props: this.formBuilder.array([])
    });
  }

  back() {
    this._location.back();
  }

  onSubmit(event: Event) {

  // console.log(this.productForm);
  event.preventDefault();

   if (this.productForm.valid) {
    const  product = this.productForm.value;
    product.image='http://placeimg.com/640/480'

    this.productsService.update(this.id, product)
    .subscribe((rta) => {
      console.log(rta);
      this.toastr.success(rta.message, `Producto ${rta.data.name} Actualizado!`);
      this.router.navigate(['products']);

    });
  }

}

get props() {
  return this.productForm.get('props') as FormArray;
}
addProps() {
  this.props.push(this.formBuilder.control(''));
}

addPropstoEdit(prop: string) {
  this.props.push(this.formBuilder.control(prop));
}
deleteProps(index: any){
  // console.log(this.props);
  this.props.removeAt(index);

}

}
