import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "../auth.model";
import {RoleModel} from "../../../role.model";
import {Role2Model} from "./role2.model";
import {RegisterService} from "./register.service";
import {RegisterModel, RoleRegister} from "./register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister!: FormGroup;
  listRole!: RoleModel[];

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService,
    private formBuild: FormBuilder) {
    this.formRegister = this.formBuild.group({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'role_id': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  ngOnInit(): void {
    this.getListRole();
  }

  onFormSubmit() {

  }

  register() {
    let user: AuthModel = this.formRegister.value;

    this.auth.create(user).subscribe(value => {
      if (value.status === 200) {
        console.log(value.body);
        this.router.navigate(['/', 'login']);
      } else {
        alert("Gagal Create Data");
        console.log(value.body)
      }
    })
  }

  getListRole() {
    this.auth.listRole().subscribe({
      next: value => {
        console.log(value);
        this.listRole = value;
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log("Service Telah Dijalankan")
      }
    });
  }
}
