import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWrapperComponent } from './other-wrapper.component';

describe('OtherWrapperComponent', () => {
  let component: OtherWrapperComponent;
  let fixture: ComponentFixture<OtherWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
