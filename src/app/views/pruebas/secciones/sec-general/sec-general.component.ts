import { Component, OnInit, forwardRef } from '@angular/core';
import { FormSections, IMask } from '../../formSections.abstract';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export type GeneralSection = {
  Cuit: string;
  NombreFantasia: string;
  RazonSocial: string;
  ProximaInteraccion: Date;
  UltimaInteraccion: Date;
}

@Component({
  selector: 'app-sec-general',
  templateUrl: './sec-general.component.html',
  styleUrls: ['./sec-general.component.css'],
  providers: [{
    provide: FormSections,
    useExisting: forwardRef( () => SecGeneralComponent )
  }]
})
export class SecGeneralComponent extends FormSections<GeneralSection> implements OnInit {

  formgroup: FormGroup;
  puertaNecesaria: string = '';
  isAuthorized: boolean = false;
  cuit_mask: IMask = {
    mask: '00-00000000-0',
    lazy: false
  }
  minDate: Date = new Date(1899,12,1);
  maxDate: Date = new Date();

  constructor() {
    super();
    this.formgroup = new FormGroup({})

    this.formgroup.addControl("Cuit", new FormControl('', []));
    this.formgroup.addControl("NombreFantasia", new FormControl('', [Validators.required]));
    this.formgroup.addControl("RazonSocial", new FormControl('', []));
    this.formgroup.addControl("ProximaInteraccion", new FormControl('', []));
    this.formgroup.addControl("UltimaInteraccion", new FormControl('', []));

  }

  ngOnInit(): void {
  }

}
