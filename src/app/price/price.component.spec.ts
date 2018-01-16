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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('cpf', () => {

    it('should be required and accept only 11 numbers', () => {
      let errors = {};
      let cpf = component.form.controls['cpf'];
      //Set correct input value
      cpf.setValue('11111111111');
      //Get errors
      errors = cpf.errors || {};
      //Check if required, minlength and maxlength are false
      expect(errors['required']).toBeFalsy();
      expect(errors['minlength']).toBeFalsy();
      expect(errors['maxlength']).toBeFalsy();
    });
  });

  describe('phone', () => {
    it('should be required and accept only 11 numbers', () => {
      let errors = {};
      let phone = component.form.controls['phone'];
      //Set correct input value
      phone.setValue('11123456789');
      //Get errors
      errors = phone.errors || {};
      //Check if required, minlength and maxlength are false
      expect(errors['required']).toBeFalsy();
      expect(errors['minlength']).toBeFalsy();
      expect(errors['maxlength']).toBeFalsy();
    });
  });

  describe('card number', () => {
    it('should be required and accept only 16 numbers', () => {
      let errors = {};
      let cardNumber = component.form.controls['cardNumber'];
      //Set correct input value
      cardNumber.setValue('1111111111111111');
      //Get errors
      errors = cardNumber.errors || {};
      //Check if required, minlength and maxlength are false
      expect(errors['required']).toBeFalsy();      
      expect(errors['minlength']).toBeFalsy();
      expect(errors['maxlength']).toBeFalsy();
    });
  });

  describe('card date month', () => {
    it('should be required and accept only 2 numbers', () => {
      let errors = {};
      let cardDateMonth = component.form.controls['cardDateMonth'];
      //Set correct input value
      cardDateMonth.setValue('03');
      //Get errors
      errors = cardDateMonth.errors || {};
      //Check if required, minlength and maxlength are false
      expect(errors['required']).toBeFalsy();      
      expect(errors['minlength']).toBeFalsy();
      expect(errors['maxlength']).toBeFalsy();
    });
  });

  describe('card date year', () => {
    it('should be required and accept only 4 numbers', () => {
      let errors = {};
      let cardDateYear = component.form.controls['cardDateYear'];
      //Set correct input value
      cardDateYear.setValue('2020');
      //Get errors
      errors = cardDateYear.errors || {};
      //Check if required, minlength and maxlength are false
      expect(errors['required']).toBeFalsy();
      expect(errors['minlength']).toBeFalsy();
      expect(errors['maxlength']).toBeFalsy();
    });
  });

});
