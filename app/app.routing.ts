import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
