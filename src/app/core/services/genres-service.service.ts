import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { type Genre } from '../models/genre.model';
import { type GetAllAPIResponse } from '../models/getall.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private baseUrl = 'http://localhost:5101/api/';
  private httpClient = inject(HttpClient);

  getAllGenres(pageNumber: number, pageSize: number) {
    return this.httpClient.get<GetAllAPIResponse<Genre>>(`${this.baseUrl}Genre/Genres?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getGenreMovies(genreId: number, pageNumber: number, pageSize: number) {
    return this.httpClient.get<GetAllAPIResponse<Movie>>(`${this.baseUrl}MovieDash/GetMoviesByGenre/${genreId}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
