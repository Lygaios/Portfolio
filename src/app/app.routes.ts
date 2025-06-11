import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', redirectTo: '' },
];
