import { FirstComponent } from './first/first.component';

export const AppRoutes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', component: FirstComponent }
];
