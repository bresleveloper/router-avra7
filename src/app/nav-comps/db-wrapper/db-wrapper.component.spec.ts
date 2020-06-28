import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbWrapperComponent } from './db-wrapper.component';

describe('DbWrapperComponent', () => {
  let component: DbWrapperComponent;
  let fixture: ComponentFixture<DbWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
