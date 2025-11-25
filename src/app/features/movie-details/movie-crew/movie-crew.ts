import { Component, input } from '@angular/core';

import { Actor } from '../../../core/models/actor.model';
import { Director } from '../../../core/models/director.model';

@Component({
  selector: 'app-movie-crew',
  imports: [],
  templateUrl: './movie-crew.html',
  styleUrl: './movie-crew.css',
})
export class MovieCrew {
  actors = input.required<Actor[]>();
  director = input.required<Director>();
}
