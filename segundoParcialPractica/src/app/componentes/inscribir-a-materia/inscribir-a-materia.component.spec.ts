import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirAMateriaComponent } from './inscribir-a-materia.component';

describe('InscribirAMateriaComponent', () => {
  let component: InscribirAMateriaComponent;
  let fixture: ComponentFixture<InscribirAMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscribirAMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribirAMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
