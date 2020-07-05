import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2ShowChildRefComponent } from './c2-show-child-ref.component';

describe('C2ShowChildRefComponent', () => {
  let component: C2ShowChildRefComponent;
  let fixture: ComponentFixture<C2ShowChildRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2ShowChildRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2ShowChildRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
