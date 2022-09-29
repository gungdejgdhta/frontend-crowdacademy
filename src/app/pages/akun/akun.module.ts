import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AkunRoutingModule } from './akun-routing.module';
import { FormAkunComponent } from './form-akun/form-akun.component';
import { ListAkunComponent } from './list-akun/list-akun.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FormAkunComponent,
    ListAkunComponent
  ],
  imports: [
    CommonModule,
    AkunRoutingModule,
    ReactiveFormsModule
  ]
})
export class AkunModule { }
