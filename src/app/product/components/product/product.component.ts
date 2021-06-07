import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from './../../../core/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

   @Input() product: Product;
   @Output() productClicked = new EventEmitter<any>();

   addCart(){
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
   }
}