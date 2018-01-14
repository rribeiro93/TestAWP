import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbStepsComponent } from './breadcrumb-steps/breadcrumb-steps.component';
import { BreadCrumbStepsService } from './breadcrumb-steps/breadcrumb-steps.service';
import { PriceComponent } from './price/price.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FieldValidationComponent } from './field-validation/field-validation.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
