import { Injectable } from '@angular/core';
import { Horariosemana } from '../modelos/aplicacion';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private horarios: Horariosemana[] = [
    { hora: '07:00 - 08:00', Lunes: 'DESARROLLO EXERIMENTAL E INNOVACION TECNOLOGICAS', Martes: 'BASE DE DATOS II', Miercoles: 'BASE DE DATOS II', Jueves: 'BASE DE DATOS II', Viernes: 'DESARROLLO EXERIMENTAL E INNOVACION TECNOLOGICAS' },
    { hora: '08:00 - 09:00', Lunes: 'DESARROLLO EXERIMENTAL E INNOVACION TECNOLOGICAS', Martes: 'BASE DE DATOS II', Miercoles: 'BASE DE DATOS II', Jueves: 'BASE DE DATOS II', Viernes: 'DESARROLLO EXERIMENTAL E INNOVACION TECNOLOGICAS' },
    { hora: '09:00 - 10:00', Lunes: 'SISTEMAS DIGITALES ', Martes: 'REDES DE COMPUTADORA I', Miercoles: 'PROGRAMCION WEB', Jueves: 'SISTEMAS DE INFORMACION', Viernes: 'PROGRAMCION WEB' },
    { hora: '10:00 - 11:00', Lunes: 'SISTEMAS DIGITALES ', Martes: 'REDES DE COMPUTADORA I', Miercoles: 'PROGRAMCION WEB', Jueves: 'REDES DE COMPUTADORA I ', Viernes: 'PROGRAMCION WEB' },
    { hora: '11:00 - 12:00', Lunes: 'PROGRAMCION WEB', Martes: 'SISTEMAS DIGITALES', Miercoles: '', Jueves: 'REDES DE COMPUTADORA I ', Viernes: 'SISTEMAS DE INFORMACION' },
    { hora: '13:00 - 14:00', Lunes: 'PROGRAMCION WEB', Martes: 'SISTEMAS DIGITALES', Miercoles: '', Jueves: 'REDES DE COMPUTADORA I ', Viernes: 'SISTEMAS DE INFORMACION' },
    { hora: '16:00 - 18:00', Lunes: '', Martes: '', Miercoles: 'SISTEMAS DE INFORMACION', Jueves: ' ', Viernes: '' }
  ];

  constructor() {}

  obtenerHorarios(): Horariosemana[] {
    return JSON.parse(JSON.stringify(this.horarios));
  }
}
