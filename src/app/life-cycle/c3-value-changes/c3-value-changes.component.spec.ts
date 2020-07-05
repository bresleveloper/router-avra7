import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3ValueChangesComponent } from './c3-value-changes.component';

describe('C3ValueChangesComponent', () => {
  let component: C3ValueChangesComponent;
  let fixture: ComponentFixture<C3ValueChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3ValueChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3ValueChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
