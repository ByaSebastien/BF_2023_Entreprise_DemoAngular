import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHttpComponent } from './demo-http.component';

describe('DemoHttpComponent', () => {
  let component: DemoHttpComponent;
  let fixture: ComponentFixture<DemoHttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoHttpComponent]
    });
    fixture = TestBed.createComponent(DemoHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
