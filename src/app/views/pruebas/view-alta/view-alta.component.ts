import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-alta',
  templateUrl: './view-alta.component.html',
  styleUrls: ['./view-alta.component.css']
})
export class ViewAltaComponent implements OnInit {

  altaRapidaForm: FormGroup;

  constructor() {
    this.altaRapidaForm = new FormGroup({});
   }

  ngOnInit(): void {
  }

}
