import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navItems = [
    { label: 'Home', route: '/' },
    { label: 'For You', route: '/foryou'},
    { label: 'Trending', route: '/trending' },
    { label: 'Genres', route: '/genres' },
    { label: 'My List', route: '/watchlist' }
  ];

  isMenuOpen = false;
  isSearchOpen = false;
  searchQuery = '';
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
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
