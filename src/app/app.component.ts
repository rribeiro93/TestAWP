import { Component, OnInit } from '@angular/core';
import { BreadCrumbStepsService } from './breadcrumb-steps/breadcrumb-steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  bg: string = 'bg-blue';

  constructor(private _stepService: BreadCrumbStepsService) { }

  ngOnInit() {
    
    //Change head color if necessary
    this._stepService.headColorChanged$.subscribe(class_ => {
      this.bg = class_;
    });
  }

}
