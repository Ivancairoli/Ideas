export type Provincias = {
    cantidad: number;
    inicio: number;
    parametros: {};
    provincias: Provincia[];
    total: number;
}

export interface Provincia {
    id: number;
    nombre: string;
}

export class Centroide {
    lat: number;
    long: number;
    constructor(_lat: number, _long: number){
        this.lat = _lat;
        this.long = _long;
    }
}