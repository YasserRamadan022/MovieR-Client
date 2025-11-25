import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.Home) },
    { path: 'genres', loadComponent: () => import('./features/genres/genres').then(m => m.Genres) },
    { path: 'genres/:genreName/:genreId', loadComponent: () => import('./features/genre-movies/genre-movies').then(m => m.GenreMovies) },
    { path: 'movie/:movieId', loadComponent: () => import('./features/movie-details/movie-details').then(m => m.MovieDetails) },
    { path: '**', redirectTo: '/home' }
];
