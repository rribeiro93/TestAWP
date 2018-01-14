import { RouterModule, Routes } from '@angular/router';
import { PriceComponent } from './price/price.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const appRoutes: Routes = [
    { path: '', component: PriceComponent },
    { path: 'price', component: PriceComponent },
    { path: 'confirmation', component: ConfirmationComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);