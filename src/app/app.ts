import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
