import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navigation-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  public toggled: boolean = false;

  public ToggleOverlay = () => this.toggled = !this.toggled;
  public CloseOverlay = () => this.toggled = false;

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 640) this.toggled = false;
  }

  public items = [
    { title: 'ABOUT ME', hyperlink: 'home' },
    { title: 'RESUME', hyperlink: 'resume' },
    { title: 'ARTICLES', hyperlink: 'articles' },
  ];
}
