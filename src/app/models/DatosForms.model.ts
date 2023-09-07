
export class CUITValueObject {
  constructor(identificador: number, numero: number, digito: number) {
    this.identificador = identificador;
    this.numero = numero;
    this.digito = digito;
    this.cuit = `${this.identificador}-${this.numero}-${this.digito}`;
  }

  public identificador: number;
  public numero: number;
  public digito: number;
  public cuit: string;
}

export class Logistica {
  diaHoraColecta: string;
  retiraEnTienda: string;
  tipo: string;
  id: number;
}

export class Domicilio {
  codigoPostal: number;
  provincia: string;
  localidad: string;
  calle: string;
  numeroPuerta: number;
  piso: string;
  departamento: string;
  id: number;
}

export class Contacto {
  nombreContacto: string;
  telefono?: string;
  email: string;
  tipo: string;
  id: number;
}

export class Integrador {
  id: number;
  nombre: string;
}

export interface Categoria {
  id: number;
  clave?: string;
  valor: string;
}

export interface CategoriasSecundarias {
  id: number;
  Clave: string;
  Descripcion: string;
  parametrosValores: Categoria[];
}

export interface CategoriaSecundaria {
  id: number;
  nombre: string;
}

export interface CategoriaImpositiva {
  nombre: string;
  codigo: number;
}