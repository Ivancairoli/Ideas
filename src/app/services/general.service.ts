import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Provincia, Provincias } from '../models/Provincia.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private router: Router,
    private http: HttpClient) { }

  apiProvincias: string = "https://apis.datos.gob.ar/georef/api/provincias?";

  //Sistema de navegación entre links de header
  navegar(string: string){
    if (string){
      this.router.navigateByUrl(`/${string}`)
    }
    else{
    this.router.navigateByUrl('');
    }
  }
  
  obtenerProvincias(): Observable<Provincia[]> {
    return this.http.get<Provincias>(this.apiProvincias).pipe(
      map((response: Provincias) => response.provincias)
    );
  }


}











  //Contemplar fallos

  // obtenerProvincias(): Observable<Provincia[]>{
  //   return this.http.get<Provincias[]>(this.apiProvincias).pipe(map(
  //     response => response.map(prov => new Provincia(prov.provincias.centroide, prov.provincias.id, prov.provincias.nombre))
  //   ));
  // }

  // obtenerProvincias(): Observable<Provincia[]>{
  //   return this.http.get<Provincias[]>(this.apiProvincias).pipe(map(
  //     response => response[0].provincias.map(prov => new Provincia(prov.centroide, prov.id, prov.nombre))
  //   ));
  // }

  // obtenerProvincias(): Observable<Provincia[]> {
  //   return this.http.get<Provincias[]>(this.apiProvincias).pipe(map(
  //     response => response.map(item => item.provincias)
  //   ));
  // }