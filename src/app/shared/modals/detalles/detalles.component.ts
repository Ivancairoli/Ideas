import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiciosComponent } from 'src/app/views/servicios/servicios.component';


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
