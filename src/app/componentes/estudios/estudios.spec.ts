import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Estudios } from './estudios';

describe('EstudiosComponent', () => {
  let component: Estudios;
  let fixture: ComponentFixture<Estudios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estudios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estudios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize horarios on ngOnInit', () => {
    component.ngOnInit();
    expect(component.horarios).toBeDefined();
    expect(component.horarios.length).toBe(7);
  });
});
