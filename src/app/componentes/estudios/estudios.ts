import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorariosService } from '../../servicios/aplicaciones';
import { Horariosemana } from '../../modelos/aplicacion';

@Component({
  selector: 'app-estudios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudios.html',
  styleUrls: ['./estudios.css']     
})
export class Estudios implements OnInit {

  horarios: Horariosemana[] = [];

  constructor(
    private horariosService: HorariosService
  ) {}

  ngOnInit(): void {
    this.horarios = this.horariosService.obtenerHorarios();
  }

}