import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupParamComponent } from './recup-param.component';

describe('RecupParamComponent', () => {
  let component: RecupParamComponent;
  let fixture: ComponentFixture<RecupParamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecupParamComponent]
    });
    fixture = TestBed.createComponent(RecupParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
