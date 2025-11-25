import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GenresService } from '../../core/services/genres-service.service';
import { type GetAllAPIResponse } from '../../core/models/getall.model';
import { type Movie } from '../../core/models/movie.model';


@Component({
  selector: 'app-genre-movies',
  imports: [RouterLink],
  templateUrl: './genre-movies.html',
  styleUrl: './genre-movies.css',
})
export class GenreMovies implements OnInit {
 genreId = input.required<number>();
 genreName = input.required<string>();
 private destroyRef = inject(DestroyRef);
 private genresService = inject(GenresService);

 Movies = signal<Movie[]>([]);
 isLoading = signal<boolean>(false);
  ngOnInit(): void {
    this.isLoading.set(true);
    console.log(this.genreName());
   const subscription = this.genresService.getGenreMovies(this.genreId(), 1, 10).subscribe({
    next: (response: GetAllAPIResponse<Movie>) => {
      this.Movies.set(response.data.data);
    },
    error: (error: any) => {
      console.error('Error fetching genre movies:', error);
    },
    complete: () => {
      this.isLoading.set(false);
    },
   });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
 }
}
