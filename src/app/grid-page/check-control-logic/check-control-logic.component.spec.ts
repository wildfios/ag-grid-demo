import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckControlLogicComponent } from './check-control-logic.component';

describe('CheckControlLogicComponent', () => {
  let component: CheckControlLogicComponent;
  let fixture: ComponentFixture<CheckControlLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckControlLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckControlLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
