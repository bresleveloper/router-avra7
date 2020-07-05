import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C5ChildComponent } from './c5-child.component';

describe('C5ChildComponent', () => {
  let component: C5ChildComponent;
  let fixture: ComponentFixture<C5ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C5ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
