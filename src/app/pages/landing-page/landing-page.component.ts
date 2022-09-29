import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  name: any;

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().subscribe(() => {
      this.authService.removeToken();
      this.router.navigate(['']);
    })
  }

}
