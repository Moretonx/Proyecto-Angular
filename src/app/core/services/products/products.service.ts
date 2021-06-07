import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from './../../../../environments/environment';

import {Product} from '../../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /* products: Product[] = [
     {
      id: '1',
      image: 'assets/imagenes/lapiz.jpg',
      title: 'Lapiz',
      price: 1000,
      description: 'El mejor lapiz'
    },
    {
      id: '2',
      image: 'assets/imagenes/cuaderno.jpg',
      title: 'Cuaderno',
      price: 2000,
      description: 'El mejor cuaderno'
    },
    {
      id: '3',
      image: 'assets/imagenes/libro.jpg',
      title: 'Libro',
      price: 5000,
      description: 'El mejor libro'
    } ] */

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
}
