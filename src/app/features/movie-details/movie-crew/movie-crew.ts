import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Actor } from '../../../core/models/actor.model';
import { Director } from '../../../core/models/director.model';


@Component({
  selector: 'app-movie-crew',
  imports: [RouterLink],
  templateUrl: './movie-crew.html',
  styleUrl: './movie-crew.css',
})
export class MovieCrew {
  actors = input.required<Actor[]>();
  director = input.required<Director>();
}
