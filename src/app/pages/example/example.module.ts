import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ListExampleComponent } from './list-example/list-example.component';
import { FormExampleComponent } from './form-example/form-example.component';
import {IconModule} from "@coreui/icons-angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListExampleComponent,
    FormExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    IconModule,
    ReactiveFormsModule
  ]
})
export class ExampleModule { }
