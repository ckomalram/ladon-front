import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'categoria', 'precio', 'cantidad', 'inventario', 'accion'];
  dataSource;
  products = [];
  quantityClass = '';

  constructor(private productsService: ProductService,
    private toastr: ToastrService
  ) { }

  async ngOnInit() {
    await this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getProducts()
      .subscribe(rta => {
        let newProducts= [];
        this.products = rta;
        this.products.forEach(element => {
          if (element.quantity > 10) {
            element = {
              ...element,
              inventario: 'stock'
            }
          } else if (element.quantity > 0 && element.quantity <= 10) {
            element = {
              ...element,
              inventario: 'limitado'
            }
          }
          else {
            element = {
              ...element,
              inventario: 'agotado'
            }
          }

          newProducts.push(element);
        });

      this.products=newProducts;
      // console.log(this.products);

        this.dataSource = new MatTableDataSource(this.products);
        // console.log(rta);
        // console.log(this.products);
      });
  }

  deleteProduct(id) {
    // console.log('deleteProduct producto');
    this.productsService.delete(id)
      .subscribe(rta => {
        this.fetchProducts();
        this.toastr.success('', `Producto ${id} Eliminado`);

      });
  }

  applyFilter(event: Event) {
    // console.log('Alzando filtro');
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log(this.dataSource);
  }



}
