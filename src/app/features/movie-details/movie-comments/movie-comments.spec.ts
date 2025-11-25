import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComments } from './movie-comments';

describe('MovieComments', () => {
  let component: MovieComments;
  let fixture: ComponentFixture<MovieComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieComments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieComments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
