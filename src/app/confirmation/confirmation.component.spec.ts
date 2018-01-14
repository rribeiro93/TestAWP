import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { routing } from './../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmationComponent } from './confirmation.component';
import { BreadcrumbStepsComponent } from './../breadcrumb-steps/breadcrumb-steps.component';
import { BreadCrumbStepsService } from './../breadcrumb-steps/breadcrumb-steps.service';
import { PriceComponent } from './../price/price.component';
import { FieldValidationComponent } from './../field-validation/field-validation.component';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConfirmationComponent,
        BreadcrumbStepsComponent,
        PriceComponent,
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
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
