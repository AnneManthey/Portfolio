import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Hero } from './pages/content/hero/hero';
import { AboutMe } from './pages/content/about-me/about-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
