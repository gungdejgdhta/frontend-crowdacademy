import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth.service";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {AuthInterceptor} from "../../../auth.interceptor";
import {AuthModel} from "../auth.model";
import {RoleModel} from "../../../role.model";
import {LoginService} from "./login.service";
import {LoginModel} from "./login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  listRole!: RoleModel[];

  constructor(private formBuild: FormBuilder,
              private http: HttpClient,
              private loginService: LoginService,
              private router: Router) {
    this.formLogin = this.formBuild.group({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'role_id': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    })
  }

  ngOnInit(): void {
    this.getListRole();
  }

  onFormSubmit(): void {

  }

  login() {
    let user: LoginModel = this.formLogin.value;

    this.loginService.create(user).subscribe(value => {
      if (value.status === 200) {
        console.log(value.body);
        this.router.navigate(['/', 'users']);
      } else {
        alert("Gagal Create Data");
        console.log(value.body)
      }
    })
  }

  getListRole() {
    this.loginService.list().subscribe({
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
