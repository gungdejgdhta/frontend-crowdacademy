import { Component, OnInit } from '@angular/core';
import {freeSet} from "@coreui/icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons = freeSet;

  constructor() { }

  ngOnInit(): void {
  }

}
