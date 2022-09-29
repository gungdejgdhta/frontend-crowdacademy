import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterModel} from "./register.model";
import {environment} from "../../../../environments/environment";
import {Role2Model} from "./role2.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  create(value: RegisterModel) {
    return this.http.post(`${environment.baseUrl}/user/create`, value, {observe: "response"});
  }

  list() {
    return this.http.get<Role2Model[]>(`${environment.baseUrl}/role`)
  }
}
