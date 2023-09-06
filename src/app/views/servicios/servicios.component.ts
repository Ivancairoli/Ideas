import { Component, ElementRef, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, of, startWith, tap } from 'rxjs';
import { Provincia } from 'src/app/models/Provincia.model';
import { GeneralService } from 'src/app/services/general.service';
import { DetallesComponent } from 'src/app/shared/modals/detalles/detalles.component';
import { Objeto } from 'src/app/models/Crud.model';


export interface User {
  name: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  //Formulario Autocomplete
  formularioAutocomplete: FormGroup;
  @ViewChild('provinciaInput', { static: true }) provinciaInput!: ElementRef;
  consulted: boolean = false;
  filteredValues: Observable<Provincia[]>;
  listValues: Provincia[];
  provinciasOrdenadas: Provincia[];
  //-------Fin Autocomplete---------

  //Formulario CRUD
  formularioCrud: FormGroup;
  minDate: Date = new Date();
  datosCrud: Objeto[];
  //------Fin Formulario CRUD-------

  constructor(private generalService: GeneralService,
    private dialog: MatDialog) {
      //Formulario Autocomplete
      this.formularioAutocomplete = new FormGroup({
        Provincia: new FormControl("", []),
      })
      //Formulario CRUD
      this.formularioCrud = new FormGroup({
        fecha: new FormControl("",[]),
        titulo: new FormControl("", [])
      })
   }

  ngOnInit(): void {
    this.generalService.obtenerProvincias().subscribe(res => {
      this.listValues = res;
      this.listValues.sort((a,b) => {
        return a.id - b.id;
      })
    }).add(() => {
      this.filteredValues = this.formularioAutocomplete.controls['Provincia'].valueChanges.pipe(
        startWith(''),
        map<string | Provincia,  Provincia[]>(value => {
          const prov = typeof value === 'string' ? value : value.nombre;     
          return this._filter(prov || '')
      })
      )
    });
  }
  
  private _filter(_value: string) : Provincia[] {
    const filterValue = _value.toLowerCase();
    return this.listValues.filter(prov => `${prov.id} - ${prov.nombre}`.toLowerCase().includes(filterValue))
  }

  displayFn(provincia:Provincia): string {
    return provincia  ? provincia.nombre : '';
  }

  abrirDetalles(elemento: string): void {
    this.dialog.open(DetallesComponent, {
      width: '750px',
      height: '750px',
      data: elemento
    });
  }

  verFormulario(){
    this.consulted = true
    let valores = this.formularioAutocomplete.getRawValue();
    console.log(valores);
  }
}
