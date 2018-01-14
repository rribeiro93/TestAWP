import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BreadCrumbStepsService } from './../breadcrumb-steps/breadcrumb-steps.service';
import { Produtct } from './../product/product';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  form: FormGroup;
  displayError: boolean;
  formSubmitAttempt: boolean = false;
  product: Produtct = new Produtct();

  constructor(private _router: Router, private _formBuilder: FormBuilder, private _stepService: BreadCrumbStepsService) { }

  ngOnInit() {

    //Send to breadcrumb service 
    this._stepService.currentStep(2);

    this.form = this._formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11)
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.maxLength(11),
        Validators.minLength(11)
      ]],
      cardName: ['', Validators.required],
      cardNumber: ['', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.maxLength(16),
        Validators.minLength(16)
      ]],
      cardDateMonth: ['', [
        Validators.required,
        Validators.pattern('^(0|[0-9][0-9]*)$'),
        Validators.maxLength(2),
        Validators.minLength(2)
      ]],
      cardDateYear: ['', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.maxLength(4),
        Validators.minLength(4)
      ]],
      cardCode: ['', [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)
      ]],
      termsConditions: ['', Validators.required]
    });

  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched || (this.form.get(field).untouched && this.formSubmitAttempt);
  }

  displayFieldCss(field: string) {
    return {
      'validate-error': this.isFieldValid(field),
    };
  }

  next(event) {
    event.preventDefault();

    this.formSubmitAttempt = true;
    if (this.form.valid) {
      this._router.navigate(['confirmation']);
    }
  }

}
