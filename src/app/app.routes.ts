import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'ConceptLearn - Master Technical Concepts'
  },
  {
    path: 'category/:name',
    loadComponent: () => import('./features/category/category.component').then(m => m.CategoryComponent),
    title: 'Category Concepts - ConceptLearn'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

