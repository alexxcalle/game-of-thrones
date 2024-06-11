import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Router, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  },
];

NgModule({ imports: [Router, HttpClient], exports: [Router] });
