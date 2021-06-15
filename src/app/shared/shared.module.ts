import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MaterialModule} from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DoblesProductosPipe } from './pipes/dobles-productos/dobles-productos.pipe';
import { ContadorProductosPipe } from './pipes/contador-productos/contador-productos.pipe';


@NgModule({
  declarations: [
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    DoblesProductosPipe,
    ContadorProductosPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent, DoblesProductosPipe, ContadorProductosPipe],
})
export class SharedModule { }
