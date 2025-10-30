import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './componentes/cabecera/cabecera';
import { PaginaPie } from './componentes/pagina-pie/pagina-pie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera, PaginaPie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('perfil');
}
