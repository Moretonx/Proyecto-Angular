import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from './../../../core/models/product.model';
import {CartService} from './../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

   @Input() product: Product;
   @Output() productClicked = new EventEmitter<any>();

   constructor(
       private cartService: CartService
   ){};


   addCart(){
        console.log('añadir al carrito');
        this.cartService.addCart(this.product);
   }
}