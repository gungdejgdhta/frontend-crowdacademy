import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "./login.model";
import {environment} from "../../../../environments/environment";
import {RoleModel} from "../../../role.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  create(value: LoginModel) {
    return this.http.post(`${environment.baseUrl}/user/create`, value, {observe: "response"});
  }

  list() {
    return this.http.get<RoleModel[]>(`${environment.baseUrl}/role`);
  }
}
