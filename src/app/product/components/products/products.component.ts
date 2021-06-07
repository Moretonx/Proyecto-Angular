import { Component, OnInit } from '@angular/core';
import {Product} from '../../../core/models/product.model';
import {ProductsService} from './../../../core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    /* {
      id: '1',
      image: 'assets/imagenes/lapiz.jpg',
      title: 'Lapiz',
      price: 1000,
      description: 'Lapiz color negro.'
    },
    {
      id: '2',
      image: 'assets/imagenes/cuaderno.jpg',
      title: 'Cuaderno',
      price: 2000,
      description: 'El mejor cuaderno.'
    },
    {
      id: '3',
      image: 'assets/imagenes/libro.jpg',
      title: 'Libro',
      price: 5000,
      description: 'Libro de ciencias.'
    },
    {
      id: '4',
      image: 'assets/imagenes/agenda.jpg',
      title: 'Agenda',
      price: 3000,
      description: 'Agenda personalizada.'
    },
    {
      id: '5',
      image: 'assets/imagenes/lentes.jpg',
      title: 'Lentes',
      price: 5000,
      description: 'Lentes con filtro de luz azul.'
    },
    {
      id: '6',
      image: 'assets/imagenes/goma.jpg',
      title: 'Goma',
      price: 500,
      description: 'La goma que borra más.'
    } */]

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: string){
    console.log('products');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products=products;
    });
  }

}
