import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FormProfileComponent } from './form-profile/form-profile.component';
import {IconModule} from "@coreui/icons-angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FormProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    IconModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
