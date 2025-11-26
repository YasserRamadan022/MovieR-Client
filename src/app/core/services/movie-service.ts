import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MovieDetailsAPIResponse } from '../models/movie.model';
import { ActorMoviesResponse, DirectorMoviesResponse } from '../models/person-movies.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'http://localhost:5101/api/';
  private httpClient = inject(HttpClient);

  getMovieDetails(movieId: number) {
    return this.httpClient.get<MovieDetailsAPIResponse>(`${this.baseUrl}Movie/GetMovieDetails/${movieId}`);
  }

  getActorMovies(actorId: number, pageNumber: number, pageSize: number){
    return this.httpClient.get<ActorMoviesResponse>(`${this.baseUrl}Actor/ActorMovies/${actorId}?pageNumber=${pageNumber}&pageSize=${pageSize}`)
  }

  getDirectorMovies(directorId: number, pageNumber: number, pageSize: number){
    return this.httpClient.get<DirectorMoviesResponse>(`${this.baseUrl}Director/DirectorMovies/${directorId}?pageNumber=${pageNumber}&pageSize=${pageSize}`)
  }
}
