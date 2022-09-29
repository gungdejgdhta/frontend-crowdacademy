import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListAkunComponent} from "./list-akun/list-akun.component";
import {FormAkunComponent} from "./form-akun/form-akun.component";

const routes: Routes = [
  {
    path: '',
    component: ListAkunComponent
  },
  {
    path: 'form',
    component: FormAkunComponent
  },
  {
    path: 'edit/:id',
    component: FormAkunComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AkunRoutingModule {
}
