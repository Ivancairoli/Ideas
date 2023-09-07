import { CUITValueObject, CategoriaImpositiva, CategoriaSecundaria, CategoriasSecundarias, Contacto, Domicilio, Integrador, Logistica } from "./DatosForms.model";

//Modelo
export class AltaRapidaDTO {
  TabGeneral:DatosGeneralesReq;
  TabFiscAdm:DatosAdministrativosReq;
  TabComercial: DatosComercialesReq;
  TabIntegracion: DatosIntegracionReq;
  TabLogistica: DatosLogisticaReq;
}
//Generales
export class DatosGeneralesReq {
  Cuit: CUITValueObject;
  NombreFantasia: string;
  RazonSocial: string;
  ProximaInteraccion: Date;
  UltimaInteraccion: Date;
}
//Administrativos
export class DatosAdministrativosReq {
  Contacto: Contacto;
  DomicilioFiscal: Domicilio;
  TelefonoFiscal: string;
  CategoriaIVA: CategoriaImpositiva;
  CategoriaIIBB: CategoriaImpositiva;
  NumeroIIBB: string;
  FechaInicioActividades: Date;
}
//Comerciales
export class DatosComercialesReq {
  Contactos: Contacto[];
  CategoriaPrincipal: CategoriaSecundaria;
  CategoriasSecundarias: CategoriaSecundaria[];
}
//Integracion
export class DatosIntegracionReq {
  Integrador: Integrador;
  IdVtex: string;
}
//Logística
export class DatosLogisticaReq {
  Contacto: Contacto;
  Domicilio: Domicilio;
  Logistica: Logistica;
}

  