import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly scrolled = signal(false);

  @ViewChild('heroSection') private heroSection!: ElementRef<HTMLElement>;
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => this.scrolled.set(entry.intersectionRatio < 0.85),
      { threshold: [0.85] }
    );
    this.observer.observe(this.heroSection.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
