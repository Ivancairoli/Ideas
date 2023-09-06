export class Objeto {
    id: number;
    fecha: Date;
    titulo: string;
    descripcion: string;

    constructor(fecha: Date, titulo: string, descripcion: string){
        this.fecha = fecha;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}