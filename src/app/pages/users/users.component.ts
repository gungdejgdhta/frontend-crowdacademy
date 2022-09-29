import { Component, OnInit } from '@angular/core';
import {AuthModel} from "./auth.model";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listUser!: AuthModel[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser() {
    this.authService.listUser().subscribe({
      next: value => {
        console.log(value);
        this.listUser = value;
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
