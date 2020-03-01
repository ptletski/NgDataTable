import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeListComponent } from './intake-list.component';

describe('IntakeListComponent', () => {
  let component: IntakeListComponent;
  let fixture: ComponentFixture<IntakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
