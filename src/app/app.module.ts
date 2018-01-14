import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { routing } from './app.routes';
import { FieldValidationComponent } from './field-validation/field-validation.component';
import { BreadcrumbStepsComponent } from './breadcrumb-steps/breadcrumb-steps.component';
import { BreadCrumbStepsService } from './breadcrumb-steps/breadcrumb-steps.service';

@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    ConfirmationComponent,
    FieldValidationComponent,
    BreadcrumbStepsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    routing
  ],
  providers: [ BreadCrumbStepsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
