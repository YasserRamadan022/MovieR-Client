import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ActorService } from '../../core/services/actor.service';
import { DirectorService } from '../../core/services/director.service';
import { PersonService } from '../../core/interfaces/Iperson-service';
import { GetAllAPIResponse } from '../../core/models/getall.model';
import { Director } from '../../core/models/director.model';
import { Actor } from '../../core/models/actor.model';

type Person = Actor | Director;

@Component({
  selector: 'app-actors-directors',
  imports: [RouterLink],
  templateUrl: './actors-directors.html',
  styleUrl: './actors-directors.css',
})
export class ActorsDirectors implements OnInit {
  private route = inject(ActivatedRoute);
  private actorService = inject(ActorService);
  private directorService = inject(DirectorService);
  private service!: PersonService;
  private destroyRef = inject(DestroyRef);

  type = signal<'actor' | 'director'>('actor');
  isLoading = signal<boolean>(false);
  responseData = signal<GetAllAPIResponse<Actor> | GetAllAPIResponse<Director> | null>(null);

  persons = computed<Person[]>(() => {
    const res = this.responseData();
    return res ? res.data.data : [];
  });

  ngOnInit(): void {
    const type = this.route.snapshot.data['type'];
    this.type.set(type);

    this.service = type === 'actor' ? this.actorService : this.directorService;
    this.loadPersons();
  }

  loadPersons() {
    this.isLoading.set(true);

    this.service.getAll(1, 20)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (response) => {
        this.responseData.set(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
