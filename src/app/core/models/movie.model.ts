import { Actor } from "./actor.model";
import { Director } from "./director.model";
import { Genre } from "./genre.model";

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseYear: number;
    posterUrl: string;
    averageRating: number | null;
}

export interface MovieDetailsAPIResponse {
    data: MovieDetails;
    statusCode: number;
    success: boolean;
    message: string;
}

export interface MovieDetails extends Movie {
    trailerUrl: string;
    actors: Actor[];
    director: Director;
    genres: Genre[];
    upVotes: number;
    downVotes: number;
}

