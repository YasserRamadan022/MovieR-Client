import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MovieDetailsAPIResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'http://localhost:5101/api/';
  private httpClient = inject(HttpClient);

  getMovieDetails(movieId: number) {
    return this.httpClient.get<MovieDetailsAPIResponse>(`${this.baseUrl}Movie/GetMovieDetails/${movieId}`);
  }
}
