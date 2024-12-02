import { Component } from '@angular/core';
import { ActividadesService } from '../servicios/actividades.service';

@Component({
  selector: 'app-lista-actividades',
  templateUrl: './lista-actividades.component.html',
  styleUrl: './lista-actividades.component.scss'
})
export class ListaActividadesComponent {
  actividades: any[];

  constructor(private actividadesServicio: ActividadesService) {
    this.actividades = this.actividadesServicio.listaActividades();
  }
}
