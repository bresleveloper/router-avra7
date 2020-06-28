import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherC2Component } from './other-c2.component';

describe('OtherC2Component', () => {
  let component: OtherC2Component;
  let fixture: ComponentFixture<OtherC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
