import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-carousel',
  imports: [CommonModule, RouterLink],
  template: `
  <div class="carousel" (mouseenter)="stop()" (mouseleave)="start()">
    <div class="slides">
      <div *ngFor="let s of slides; let i = index"
           class="slide" [class.active]="i === active" [attr.aria-hidden]="i === active ? 'false' : 'true'">
        <img [src]="s.image" [alt]="s.alt || s.title"/>
        <div class="overlay" [class.corner]="s.corner === 'corner'">
          <div class="overlay-inner">
            <h3>{{ s.title }}</h3>
            <p class="summary">{{ s.summary }}</p>
            <p class="full" *ngIf="isExpanded(i)">{{ s.full }}</p>
            <div class="actions">
              <button class="btn ghost" (click)="toggleExpand(i)">{{ isExpanded(i) ? 'Show less' : 'Read more' }}</button>
              <a *ngIf="s.action" [routerLink]="s.action" class="btn primary" (click)="stop()">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="control prev" aria-label="Previous" (click)="prev()">‹</button>
    <button class="control next" aria-label="Next" (click)="next()">›</button>

    <div class="dots">
      <button *ngFor="let _ of slides; let i = index" class="dot" [class.active]="i === active" (click)="go(i)" [attr.aria-label]="'Go to slide '+(i+1)"></button>
    </div>
  </div>
  `,
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: Array<{title: string, summary: string, full?: string, image: string, alt?: string, action?: string, corner?: string}> = [];
  @Input() interval = 3000;

  active = 0;
  private timer: any;
  private expanded = new Set<number>();

  ngOnInit() {
    if (!this.slides || this.slides.length === 0) return;
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  start() {
    this.stop();
    if (!this.slides || this.slides.length <= 1) return;
    this.timer = setInterval(() => this.next(), this.interval);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  next() {
    if (!this.slides || this.slides.length === 0) return;
    this.active = (this.active + 1) % this.slides.length;
  }

  prev() {
    if (!this.slides || this.slides.length === 0) return;
    this.active = (this.active - 1 + this.slides.length) % this.slides.length;
    this.start();
  }

  go(i: number) {
    this.active = i;
    this.start();
  }

  toggleExpand(i: number) {
    if (this.expanded.has(i)) this.expanded.delete(i);
    else this.expanded.add(i);
  }

  isExpanded(i: number) {
    return this.expanded.has(i);
  }
}
