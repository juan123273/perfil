import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPie } from './pagina-pie';

describe('PaginaPie', () => {
  let component: PaginaPie;
  let fixture: ComponentFixture<PaginaPie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
