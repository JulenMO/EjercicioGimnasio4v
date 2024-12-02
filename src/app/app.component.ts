import { Component } from '@angular/core';
import { MenuNavbarComponent } from "./menu-navbar/menu-navbar.component";
import { ListaActividadesComponent } from "./lista-actividades/lista-actividades.component";

@Component({
  selector: 'app-root',
  imports: [MenuNavbarComponent, ListaActividadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gimnasio4V';
}
