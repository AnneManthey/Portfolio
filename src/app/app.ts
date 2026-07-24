import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Hero } from './pages/content/hero/hero';
import { AboutMe } from './pages/content/about-me/about-me';
import { Skills } from './pages/content/skills/skills';
import { Projects } from './pages/content/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, AboutMe, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
