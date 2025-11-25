import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';

import { MovieService } from '../../core/services/movie-service';
import { MovieDetails as MovieDetailsModel } from '../../core/models/movie.model';
import { MovieHero } from './movie-hero/movie-hero';
import { MovieCrew } from './movie-crew/movie-crew';

@Component({
  selector: 'app-movie-details',
  imports: [MovieHero, MovieCrew],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  movieId = input.required<number>();
  isLoading = signal(false);
  MovieDetails = signal<MovieDetailsModel>(null!);;

  private movieService = inject(MovieService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.loadMovieDetails();
  }

  loadMovieDetails(): void {
    this.isLoading.set(true);
    const subscription = this.movieService.getMovieDetails(this.movieId()).subscribe({
      next: (response) => {
        this.MovieDetails.set(response.data);
      },
      error: (error) => {
        console.error('Error fetching movie details:', error);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
