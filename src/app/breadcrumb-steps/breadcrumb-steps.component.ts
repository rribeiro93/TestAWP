import { Component, OnInit } from '@angular/core';
import { BreadCrumbStepsService } from './breadcrumb-steps.service';

class Steps {
  number: number;
  text: string;
  active: string;
  link: string;
}

@Component({
  selector: 'breadcrumb-steps',
  templateUrl: './breadcrumb-steps.component.html',
  styleUrls: ['./breadcrumb-steps.component.css']
})
export class BreadcrumbStepsComponent implements OnInit {

  steps: Steps[] = [
    { number: 1, text: 'Cotação', active: '', link: '/quotation' },
    { number: 2, text: 'Preço', active: '', link: '/price' },
    { number: 3, text: 'Confirmação', active: '', link: '/confirmation' }
  ];

  constructor(private _stepService: BreadCrumbStepsService) { }

  ngOnInit() {
    this._stepService.stepChanged$.subscribe(stepForm => {

      if (stepForm == 3) {
        this._stepService.headClass('bg-dark-grey');
      } else {
        this._stepService.headClass('bg-blue');
      }

      this.steps.forEach(step => {
        if (step.number <= stepForm) {
          step.active = 'active';
        } else {
          step.active = '';
        }
      });
    });
  }

}
