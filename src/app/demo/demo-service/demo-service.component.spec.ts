import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoServiceComponent } from './demo-service.component';

describe('DemoServiceComponent', () => {
  let component: DemoServiceComponent;
  let fixture: ComponentFixture<DemoServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoServiceComponent]
    });
    fixture = TestBed.createComponent(DemoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
