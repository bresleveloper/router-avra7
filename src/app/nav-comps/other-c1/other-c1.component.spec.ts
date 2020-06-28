import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherC1Component } from './other-c1.component';

describe('OtherC1Component', () => {
  let component: OtherC1Component;
  let fixture: ComponentFixture<OtherC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
