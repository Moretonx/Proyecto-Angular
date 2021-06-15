import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from './../../../core/models/product.model';
import {CartService} from './../../../core/services/cart.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  /* products$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  } */

  products$!: Observable<Product[]>;
  form: FormGroup;

  constructor(
    private _cartService: CartService,
    private _formBuilder: FormBuilder
  ) {
    this.products$ = this._cartService.cart$;
    this.form = {} as FormGroup;
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({});
  }

  addCart(product: Product): void {
    console.log('Agregar al carrito');
    this._cartService.addCart(product);
  }

  /**
   * Quita el conjunto de un producto del carrito.
   * @param productId Identificador del producto.
   */
  removeFromCart(productId: String) {
    this._cartService.removeFromCart(productId);
  }

  /**
   * Quita un producto especifico del carrito.
   * @param productId Identificador del producto.
   */
  remove(productId: String) {
    this._cartService.remove(productId);
  }

  /**
   * Precio total de todos los productos.
   */
  totalAmount(): number {
    let counter: number = 0;

    this.products$.subscribe((products) => {
      products.forEach((product) => {
        counter = counter + product.price;
      });
    });

    return counter;
  }

}
