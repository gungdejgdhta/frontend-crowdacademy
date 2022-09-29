import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AkunModel} from "./akun.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AkunService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<AkunModel[]>(`${environment.baseUrl}/akun`);
  }

  findId(id: number) {
    return this.http.get<AkunModel>(`${environment.baseUrl}/akun/${id}`);
  }

  create(value: AkunModel) {
    return this.http.post(`${environment.baseUrl}/akun/create`, value, {observe: "response"});
  }

  update(value: AkunModel) {
    return this.http.put(`${environment.baseUrl}/akun/update`, value, {observe: "response"});
  }
}
