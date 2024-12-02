import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  private listaDeActividades: any = [
    { fecha: "10/08/2014 00:00", lugar: "Aula02", monitor: "Miguel Goyena", tipo: "BodyPump" },
    { fecha: "12/09/2022 00:00", lugar: "Aula01", monitor: "Miguel Goyena", tipo: "Pilates" },
    { fecha: "03/02/2021 12:00", lugar: "Aula02", monitor: "Pedro Sanchez", tipo: "Cardio" },
  ];

  constructor() { }

  listaActividades() {
    return this.listaDeActividades;
  }
}
