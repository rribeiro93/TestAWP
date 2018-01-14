import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbStepsComponent } from './breadcrumb-steps.component';

describe('BreadcrumbStepsComponent', () => {
  let component: BreadcrumbStepsComponent;
  let fixture: ComponentFixture<BreadcrumbStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
