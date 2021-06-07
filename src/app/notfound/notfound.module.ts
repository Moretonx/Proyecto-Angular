import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {NotFoundRoutingModule} from './notfound-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
      NotfoundComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      NotFoundRoutingModule
    ]
  })
  export class NotFoundModule {
  
  }