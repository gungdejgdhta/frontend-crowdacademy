import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  formExample!: FormGroup;

  constructor(private formBuild: FormBuilder,
              private router: Router) {
    this.formExample = this.formBuild.group({
      nama: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  save() {
    alert('Nama : ' + this.formExample.controls['nama'].value + '\nRole : ' + this.formExample.controls['role'].value)
    this.router.navigate(['/','example'])
  }
}
