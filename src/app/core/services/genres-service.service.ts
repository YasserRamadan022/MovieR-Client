import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { type Genre } from '../models/genre.model';
import { type GetAllResponse } from '../models/getall.model';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private baseUrl = 'http://localhost:5101/api/';
  private httpClient = inject(HttpClient);

  getAllGenres(pageNumber: number, pageSize: number) {
    return this.httpClient.get<GetAllResponse<Genre>>(`${this.baseUrl}Genre/Genres?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
