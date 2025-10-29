import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Requisitos } from './requisitos';

describe('Requisitos', () => {
  let component: Requisitos;
  let fixture: ComponentFixture<Requisitos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Requisitos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Requisitos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
