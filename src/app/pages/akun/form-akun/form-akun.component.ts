import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthModel} from "../../auth/auth.model";
import {AkunService} from "../akun.service";
import {AuthService} from "../../../auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AkunModel} from "../akun.model";

@Component({
  selector: 'app-form-akun',
  templateUrl: './form-akun.component.html',
  styleUrls: ['./form-akun.component.scss']
})
export class FormAkunComponent implements OnInit {

  formAkun!: FormGroup;
  listUser!: AuthModel[];
  idAkun!: number;
  jenisMenu: string = 'Form';


  constructor(private formBuild: FormBuilder,
              private _akunService: AkunService,
              private _userService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formAkun = this.formBuild.group({
      'username': new FormControl(null, [Validators.required]),
      'nama_lengkap': new FormControl(null, [Validators.required]),
      'alamat': new FormControl(null, [Validators.required]),
      'umur': new FormControl(null, [Validators.required]),
      'universitas': new FormControl(null, [Validators.required]),
      'app_users_id': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {

    this.getListUser();

    this.activatedRoute.params.subscribe(value => {
      this.idAkun = value['id'];
    });

    if (this.idAkun) {
      this._akunService.findId(this.idAkun).subscribe(value => {

        console.log(value);
        this.formAkun.controls['username'].setValue(value.username);
        this.formAkun.controls['nama_lengkap'].setValue(value.nama_lengkap);
        this.formAkun.controls['alamat'].setValue(value.alamat);
        this.formAkun.controls['umur'].setValue(value.umur);
        this.formAkun.controls['universitas'].setValue(value.universitas);
        this.formAkun.controls['app_users'].setValue(value.app_users);
      });
      this.jenisMenu = 'Edit';
    } else {

    }
  }

  getListUser() {
    this._userService.listUser().subscribe({
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
    })
  }

  save() {
    let akun: AkunModel = this.formAkun.value;

    if (this.idAkun) {
      akun.id = this.idAkun;
      this._akunService.update(akun).subscribe(value => {
        if (value.status) {
          console.log(value.body);
          this.router.navigate(['/', 'akun']);
        } else {
          console.log(value.body);
          alert("Gagal Update data")
        }
      });
    } else {
      this._akunService.create(akun).subscribe(value => {
        if (value.status === 200) {
          console.log(value.body);
          this.router.navigate(['/', 'akun'])
        } else {
          alert("Gagal Create Data");
          console.log(value.body)
        }
      });
    }
  }

}
