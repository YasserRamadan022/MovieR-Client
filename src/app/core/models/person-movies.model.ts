import { Actor } from './actor.model';
import { Director } from './director.model';
import { Movie } from './movie.model';
import { GetAllData } from './getall.model';
import { ApiResponse } from './api-response.model';

interface PersonMoviesResponseData {
    pagedResult: GetAllData<Movie>;
}

export interface ActorMoviesResponseData extends PersonMoviesResponseData {
    actorData: Actor;
}

export interface DirectorMoviesResponseData extends PersonMoviesResponseData {
    directorData: Director;
}

export interface ActorMoviesResponse extends ApiResponse<ActorMoviesResponseData> {}
export interface DirectorMoviesResponse extends ApiResponse<DirectorMoviesResponseData> {}