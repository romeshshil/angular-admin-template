import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './blank/blank.component';

export const appRoutes: Routes = [
 { path: '', component: DashboardComponent },
  { path: 'dashboard', 
    component: DashboardComponent 
  },

  {
    path: 'blank',
    component: BlankComponent
  },

];