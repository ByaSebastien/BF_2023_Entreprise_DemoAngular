import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBindingsComponent } from './demo-bindings.component';

describe('DemoBindingsComponent', () => {
  let component: DemoBindingsComponent;
  let fixture: ComponentFixture<DemoBindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoBindingsComponent]
    });
    fixture = TestBed.createComponent(DemoBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
