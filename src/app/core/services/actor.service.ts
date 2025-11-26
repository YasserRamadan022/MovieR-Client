import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { type GetAllAPIResponse } from '../models/getall.model';
import { type Actor } from '../models/actor.model';
import { PersonService } from '../interfaces/Iperson-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActorService implements PersonService {
  private baseUrl = 'http://localhost:5101/api/';
  private httpClient = inject(HttpClient);

  getAll(pageNumber: number, pageSize: number): Observable<GetAllAPIResponse<Actor>> {
    return this.httpClient.get<GetAllAPIResponse<Actor>>(`${this.baseUrl}Actor/Actors?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}