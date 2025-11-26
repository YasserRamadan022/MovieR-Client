import { Observable } from "rxjs";

export interface PersonService {
    getAll(pageNumber: number, pageSize: number): Observable<any>;
}