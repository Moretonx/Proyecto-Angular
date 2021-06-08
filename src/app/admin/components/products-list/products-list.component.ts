import { Component, OnInit } from '@angular/core';
import{ProductsService} from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe(x => {
      this.fetchProducts();
      window.confirm('Eliminado');
    });
  }
}
