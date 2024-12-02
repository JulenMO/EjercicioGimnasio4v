import { Component, input } from '@angular/core';

@Component({
  selector: 'app-menu-navbar',
  imports: [],
  templateUrl: './menu-navbar.component.html',
  styleUrl: './menu-navbar.component.scss'
})
export class MenuNavbarComponent {
  rutaLandingPage = input("#");
  rutaSeccionLista = input("#");
}
