// src/app/servicios/horarios.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HorariosService } from './aplicaciones';

describe('HorariosService', () => {
  let service: HorariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 7 time slots', () => {
    const horarios = service.obtenerHorarios();
    expect(horarios.length).toBe(7);
  });

  it('should return a copy of horarios', () => {
    const horarios1 = service.obtenerHorarios();
    const horarios2 = service.obtenerHorarios();
    expect(horarios1).not.toBe(horarios2); // diferentes referencias
  });
});