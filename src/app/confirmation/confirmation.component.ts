import { Component, OnInit } from '@angular/core';
import { BreadCrumbStepsService } from './../breadcrumb-steps/breadcrumb-steps.service';
import { Produtct } from './../product/product';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  product: Produtct;

  constructor(private _stepService: BreadCrumbStepsService) {
    this.product = new Produtct();
  }

  ngOnInit() {

    //Send to breadcrumb service
    this._stepService.currentStep(3);

  }

}
