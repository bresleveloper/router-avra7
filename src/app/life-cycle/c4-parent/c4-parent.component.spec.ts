import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4ParentComponent } from './c4-parent.component';

describe('C4ParentComponent', () => {
  let component: C4ParentComponent;
  let fixture: ComponentFixture<C4ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
