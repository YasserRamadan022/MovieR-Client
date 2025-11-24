import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Genres } from './features/genres/genres';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'genres', component: Genres },
    { path: '**', redirectTo: '/home' }
];
