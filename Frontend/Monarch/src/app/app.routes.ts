import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/index/index.component').then(m => m.IndexComponent)
    },
    {
        path: 'make-itinerary',
        loadComponent: () => import('./pages/make-itinerary/make-itinerary.component').then(m => m.MakeItineraryComponent)
    },
    {
        path: 'user-register',
        loadComponent: () => import('./pages/user-register/user-register.component').then(m => m.UserRegisterComponent)
    }
];
