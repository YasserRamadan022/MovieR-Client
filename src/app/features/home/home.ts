import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  featuredMovie = {
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmQ0MWUzNWEtNTRkZS00ZWUyLWE5ZTItZmRlYmUwYjEwY2YxXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg',
    title: 'Inception'
  }
  // Recommended movies with match scores
  recommendedMovies = [
    { id: 1, title: 'The Dark Knight', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg', rating: 9.0, matchScore: 95 },
    { id: 2, title: 'Inception', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg', rating: 8.8, matchScore: 92 },
    { id: 3, title: 'Interstellar', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', rating: 8.6, matchScore: 90 },
    { id: 4, title: 'The Matrix', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/p96dm7sCMn4VYAStA6siNz30G1r.jpg', rating: 8.7, matchScore: 88 },
    { id: 5, title: 'Blade Runner 2049', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg', rating: 8.0, matchScore: 85 }
  ];

// Popular actors
popularActors = [
  { id: 1, name: 'Leonardo DiCaprio', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg', popularity: 9.8 },
  { id: 2, name: 'Scarlett Johansson', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/mjReG6rR7NPMEIWb1T4YWtV11ty.jpg', popularity: 9.6 },
  { id: 3, name: 'Denzel Washington', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/jj2Gcobpopokal0YstuCQW0ldJ4.jpg', popularity: 9.4 },
  { id: 4, name: 'Tom Hanks', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/eKF1sGJRrZJbfBG1KirPt1cfNd3.jpg', popularity: 9.3 },
  { id: 5, name: 'Emma Stone', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/cZ8a3QvAnj2cgcgVL6g4XaqPzpL.jpg', popularity: 9.1 }
];

// Popular directors
popularDirectors = [
  { id: 1, name: 'Christopher Nolan', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg', popularity: 9.7 },
  { id: 2, name: 'Steven Spielberg', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/tZxcg19YQ3e8fJ0pOs7hjlnmmr6.jpg', popularity: 9.6 },
  { id: 3, name: 'Martin Scorsese', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/g3DjfKsgZQWZiw30I20hZVk1oMX.jpg', popularity: 9.5 },
  { id: 4, name: 'Quentin Tarantino', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg', popularity: 9.3 },
  { id: 5, name: 'James Cameron', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_face/9NAZnTjBQ9WcXAQEzZpKy4vdQto.jpg', popularity: 9.2 }
];

}
