import { CommonModule } from '@angular/common';
import { Component, DestroyRef, HostListener, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { sign } from 'node:crypto';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements  OnInit {
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  navItems = [
    { label: 'Home', route: '/home' },
    { label: 'For You', route: '/foryou'},
    { label: 'Trending', route: '/trending' },
    { label: 'Genres', route: '/genres' },
    { label: 'Actors', route: '/actors' },
    { label: 'Directors', route: '/directors' }
  ];

  isMenuOpen = false;
  isSearchOpen = false;
  isHomeRoute = signal(false);
  searchQuery = '';
  isScrolled = signal(false);

  ngOnInit(){
    this.checkRoute();

    const subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });

      this.destroyRef.onDestroy(() =>{
        subscription.unsubscribe();
      })
  }

  private checkRoute() {
    if(this.router.url === '/home' || this.router.url === '/')
      this.isHomeRoute.set(true);
    else
      this.isHomeRoute.set(false);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(window.scrollY > 10)
      this.isScrolled.set(true);
    else
      this.isScrolled.set(false);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) {
      this.searchQuery = '';
    }
  }
}
