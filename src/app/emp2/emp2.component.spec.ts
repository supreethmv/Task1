import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp2Component } from './emp2.component';

describe('Emp2Component', () => {
  let component: Emp2Component;
  let fixture: ComponentFixture<Emp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Emp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
