import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from './layout/footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('MovieRecommendation');
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  isHomeRoute = signal(false);

  ngOnInit(): void {
    const subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });

      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
  }

  private checkRoute(): void {
    if(this.router.url === '/home' || this.router.url === '/')
      this.isHomeRoute.set(true);
    else
      this.isHomeRoute.set(false);
  }
}
