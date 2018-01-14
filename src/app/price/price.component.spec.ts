import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { routing } from './../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PriceComponent } from './../price/price.component';
import { ConfirmationComponent } from './../confirmation/confirmation.component';
import { BreadcrumbStepsComponent } from './../breadcrumb-steps/breadcrumb-steps.component';
import { BreadCrumbStepsService } from './../breadcrumb-steps/breadcrumb-steps.service';
import { FieldValidationComponent } from './../field-validation/field-validation.component';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PriceComponent,
        ConfirmationComponent,
        BreadcrumbStepsComponent,
        FieldValidationComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        routing
      ],
      providers: [
        BreadCrumbStepsService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid', () => {
    expect(component.form.valid).toBeFalsy();
  });

});
