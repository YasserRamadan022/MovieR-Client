import { Component, computed, DestroyRef, inject, input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MovieService } from '../../core/services/movie-service';
import { ActorMoviesResponseData, DirectorMoviesResponseData } from '../../core/models/person-movies.model';


@Component({
  selector: 'app-profile',
  imports: [RouterLink, DatePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  id = input.required<number>();
  type = signal<string>('');
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  private destroyRef = inject(DestroyRef);

  profileData = signal<ActorMoviesResponseData | DirectorMoviesResponseData | null>(null);
  isLoading = signal<boolean>(false);

  actor = computed<ActorMoviesResponseData | null>(() => {
    const data = this.profileData();
    return data && this.type() === 'actor'
      ? (data as ActorMoviesResponseData)
      : null;
  });

  director = computed<DirectorMoviesResponseData | null>(() => {
    const data = this.profileData();
    return data && this.type() === 'director'
      ? (data as DirectorMoviesResponseData)
      : null;
  });

  ngOnInit() {
    const type = this.route.snapshot.data['type'];
    this.type.set(type);     
    if (type === 'actor') {
      this.loadActorMovies(this.id());
    } else {
      this.loadDirectorMovies(this.id());
    }
  }

  loadActorMovies(actorId: number){
    this.isLoading.set(true);

    const subscription = this.movieService.getActorMovies(actorId, 1, 20).subscribe({
      next: (response) => {
        this.profileData.set(response.data);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
    
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  loadDirectorMovies(directorId: number){
    this.isLoading.set(true);

    const subscription = this.movieService.getDirectorMovies(directorId, 1, 20).subscribe({
      next: (response) => {
        this.profileData.set(response.data);
      },
      error: (error) => {
        console.error(error);
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
