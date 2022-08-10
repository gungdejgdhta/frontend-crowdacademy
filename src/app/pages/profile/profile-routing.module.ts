import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormProfileComponent} from "./form-profile/form-profile.component";

const routes: Routes = [
  {
    path: '',
    component: FormProfileComponent,
    data: {
      title: 'Form Profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
