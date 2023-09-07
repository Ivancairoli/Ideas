import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MaterialComponent } from 'src/app/views/material/material.component';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('content') content: string = '';


  constructor(public dialogRef: MatDialogRef<DetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
    this.title = this.data;
  }

}
