import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C6GrandsonComponent } from './c6-grandson.component';

describe('C6GrandsonComponent', () => {
  let component: C6GrandsonComponent;
  let fixture: ComponentFixture<C6GrandsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C6GrandsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C6GrandsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
