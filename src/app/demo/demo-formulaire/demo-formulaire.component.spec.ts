import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormulaireComponent } from './demo-formulaire.component';

describe('DemoFormulaireComponent', () => {
  let component: DemoFormulaireComponent;
  let fixture: ComponentFixture<DemoFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFormulaireComponent]
    });
    fixture = TestBed.createComponent(DemoFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
