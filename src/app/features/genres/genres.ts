import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GenresService } from '../../core/services/genres-service.service';
import { type Genre } from '../../core/models/genre.model';
import { type GetAllAPIResponse } from '../../core/models/getall.model';


@Component({
  selector: 'app-genres',
  imports: [RouterLink],
  templateUrl: './genres.html',
  styleUrl: './genres.css',
})
export class Genres implements OnInit {
  private GenreService = inject(GenresService);
  private destroyRef = inject(DestroyRef);

  isLoading = signal<boolean>(false);
  genres = signal<Genre[]>([]);
  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres(): void {
    this.isLoading.set(true);

    const subscription = this.GenreService.getAllGenres(1,20).subscribe({
      next: (data: GetAllAPIResponse<Genre>) => {
        if(data.success && data.statusCode == 200){
          this.genres.set(data.data.data);
        }
      },
      error: (error) => {
        console.error('Error fetching genres:', error);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  navigateToGenre(genreId: number): void {

  }
}
