import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherC3Component } from './other-c3.component';

describe('OtherC3Component', () => {
  let component: OtherC3Component;
  let fixture: ComponentFixture<OtherC3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherC3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
