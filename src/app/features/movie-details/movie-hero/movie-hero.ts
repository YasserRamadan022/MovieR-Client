import { Component, computed, input } from '@angular/core';
import { MovieDetails } from '../../../core/models/movie.model';
import { MovieActions } from '../movie-actions/movie-actions';
import { MovieTrailer } from '../movie-trailer/movie-trailer';

@Component({
  selector: 'app-movie-hero',
  imports: [MovieActions, MovieTrailer],
  templateUrl: './movie-hero.html',
  styleUrl: './movie-hero.css',
})
export class MovieHero {
  movie = input.required<MovieDetails>();

  posterUrl = computed(() => this.movie()?.posterUrl ?? '');
  title = computed(() => this.movie()?.title ?? '');
  description = computed(() => this.movie()?.description ?? '');
  releaseYear = computed(() => this.movie()?.releaseYear ?? null);
  averageRating = computed(() => this.movie()?.averageRating ?? null);
  trailerUrl = computed(() => this.movie()?.trailerUrl ?? null);
}
