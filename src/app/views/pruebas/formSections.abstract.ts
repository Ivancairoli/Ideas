import { FormGroup } from "@angular/forms";
import { AltaRapidaDTO } from "src/app/models/AltaRapida.model";

export type IMask = {
  mask: string,
  lazy: boolean
}

export abstract class FormSections<T> {

  seller: AltaRapidaDTO

  abstract formgroup: FormGroup;
  abstract puertaNecesaria: string;
  abstract isAuthorized: boolean;

  isValid = (): boolean => this.formgroup.valid;
  isDirty = (): boolean => this.formgroup.dirty;
  
}
