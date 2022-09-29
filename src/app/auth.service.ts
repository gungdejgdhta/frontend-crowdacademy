import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {AuthModel} from "./pages/auth/auth.model";
import {RoleModel} from "./role.model";


@Injectable()
export class AuthService {

  private baseUrl = environment.baseUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {
  }


  proceedLogin(usercred: any) {
    return this.http.post(this.baseUrl, usercred);
  }

  updateToken(token: any) {
    localStorage.setItem(this.tokenKey, token);
  }

  /*fetchToken(code: any, state: any): Observable<any> {
    return this.http.get(this.baseUrl + this.tokenEndpoint + '?code' + code + '&state=' + state);
  }*/

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token != null;
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  logout(): Observable<any> {
    return this.http.post(this.baseUrl + '/login', this.getToken());
  }

  //jdbc

  create(value: AuthModel) {
    return this.http.post(`${environment.baseUrl}/user/create`, value, {observe: "response"});
  }

  listRole() {
    return this.http.get<RoleModel[]>(`${environment.baseUrl}/role`);
  }

  listUser() {
    return this.http.get<AuthModel[]>(`${environment.baseUrl}/user`);
  }
}
