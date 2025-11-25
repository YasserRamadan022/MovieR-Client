import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-trailer',
  imports: [],
  templateUrl: './movie-trailer.html',
  styleUrl: './movie-trailer.css',
})
export class MovieTrailer {
  title = input.required<string>();
  trailerUrl = input.required<string>();

  private sanitizer = inject(DomSanitizer);

  isPlaying = signal(false);

  safeTrailerUrl = computed(() => {
    const url = this.trailerUrl();
    if (!url) return null;
    const youtubeWatchRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const youtubeMatch = url.match(youtubeWatchRegex);
    
    if (youtubeMatch) {
      if (this.isPlaying()) {
        const embedUrl = `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&mute=0&rel=0&modestbranding=1`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      }
      return null;
    }
    
    if (this.isPlaying() && url.includes('?')) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`${url}&autoplay=1`);
    } else if (this.isPlaying()) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1`);
    }
    return null;
  });

  youtubeVideoId = computed(() => {
    const url = this.trailerUrl();
    if (!url) return null;
    
    const youtubeWatchRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(youtubeWatchRegex);
    return match ? match[1] : null;
  });

  thumbnailUrl = computed(() => {
    const videoId = this.youtubeVideoId();
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  });

  playVideo(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isPlaying.set(true);
  }
}
