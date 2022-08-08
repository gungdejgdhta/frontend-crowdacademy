import {Component, OnInit} from '@angular/core';
import {ExampleModel} from "../example.model";
import {freeSet} from "@coreui/icons";

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  listExample: ExampleModel[] = [];
  icons = freeSet ;

  constructor() {
  }

  ngOnInit(): void {
    this.addListExample();
  }

  addListExample() {
    let data1: ExampleModel = new ExampleModel();
    data1.nama = 'John Doe';
    data1.role = 'Fullstack Developer';
    this.listExample.push(data1);

    let data2: ExampleModel = new ExampleModel();
    data2.nama = 'Marco Simanjuntak';
    data2.role = 'Backend Developer';
    this.listExample.push(data2);

    let data3: ExampleModel = new ExampleModel();
    data3.nama = 'Udin Kastengel';
    data3.role = 'Frontend Developer';
    this.listExample.push(data3);

    let data4: ExampleModel = new ExampleModel();
    data4.nama = 'Maman Resing';
    data4.role = 'Metaverse Developer';
    this.listExample.push(data4);

    let data5: ExampleModel = new ExampleModel();
    data5.nama = 'Asep Knalpot';
    data5.role = '2D/3D Animation';
    this.listExample.push(data5);
  }

}
