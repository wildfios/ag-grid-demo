import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarCountersComponent } from './status-bar-counters.component';

describe('StatusBarCountersComponent', () => {
  let component: StatusBarCountersComponent;
  let fixture: ComponentFixture<StatusBarCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBarCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBarCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
