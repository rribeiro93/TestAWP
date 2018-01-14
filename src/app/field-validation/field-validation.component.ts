import { Component, Input } from '@angular/core';

@Component({
  selector: 'field-validation',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.css']
})
export class FieldValidationComponent {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

  constructor() { }

}
