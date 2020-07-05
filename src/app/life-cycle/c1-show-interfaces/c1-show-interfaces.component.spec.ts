import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1ShowInterfacesComponent } from './c1-show-interfaces.component';

describe('C1ShowInterfacesComponent', () => {
  let component: C1ShowInterfacesComponent;
  let fixture: ComponentFixture<C1ShowInterfacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1ShowInterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1ShowInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
