import { Component, OnInit } from '@angular/core';
import {AkunModel} from "../akun.model";
import {AkunService} from "../akun.service";

@Component({
  selector: 'app-list-akun',
  templateUrl: './list-akun.component.html',
  styleUrls: ['./list-akun.component.scss']
})
export class ListAkunComponent implements OnInit {

  listAkun!: AkunModel[];

  constructor(private _akunService: AkunService) { }

  ngOnInit(): void {
    this.getListAkun();
  }

  getListAkun() {
    this._akunService.list().subscribe({
      next: value => {
        console.log(value);
        this.listAkun = value;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Service Telah Dijalankan");
      }
    })
  }

}
