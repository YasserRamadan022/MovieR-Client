import { Component, input } from '@angular/core';

@Component({
  selector: 'app-movie-trailer',
  imports: [],
  templateUrl: './movie-trailer.html',
  styleUrl: './movie-trailer.css',
})
export class MovieTrailer {
  title = input.required<string>();
  trailerUrl = input.required<string>();
}
