import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { routing } from './../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbStepsComponent } from './breadcrumb-steps.component';
import { BreadCrumbStepsService } from './breadcrumb-steps.service';
import { PriceComponent } from './../price/price.component';
import { ConfirmationComponent } from './../confirmation/confirmation.component';
import { FieldValidationComponent } from './../field-validation/field-validation.component';

describe('BreadcrumbStepsComponent', () => {
  let component: BreadcrumbStepsComponent;
  let fixture: ComponentFixture<BreadcrumbStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BreadcrumbStepsComponent,
        PriceComponent,
        ConfirmationComponent,
        FieldValidationComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        routing
      ],
      providers: [
        BreadCrumbStepsService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
