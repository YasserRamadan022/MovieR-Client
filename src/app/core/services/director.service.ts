import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { type Director } from '../models/director.model';
import { type GetAllAPIResponse } from '../models/getall.model';
import { PersonService } from '../interfaces/Iperson-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirectorService implements PersonService {
  private baseUrl = 'http://localhost:5101/api/';
  private httpClient = inject(HttpClient);

  getAll(pageNumber: number, pageSize: number): Observable<any> {
    return this.httpClient.get<GetAllAPIResponse<Director>>(`${this.baseUrl}Director/Directors?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
