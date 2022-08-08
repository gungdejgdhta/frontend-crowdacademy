import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListExampleComponent} from "./list-example/list-example.component";
import {FormExampleComponent} from "./form-example/form-example.component";

const routes: Routes = [
  {
    path:'',
    component: ListExampleComponent,
    data: {
      title: 'List Example'
    }
  },
  {
    path:'tambah',
    component: FormExampleComponent,
    data: {
      title: 'Tambah Example'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
