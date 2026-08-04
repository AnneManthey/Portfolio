import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Hero } from './pages/content/hero/hero';
import { AboutMe } from './pages/content/about-me/about-me';
import { Skills } from './pages/content/skills/skills';
import { Projects } from './pages/content/projects/projects';
import { References } from './pages/content/references/references';
import { Contact } from './pages/content/contact/contact';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, AboutMe, Skills, Projects, References, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
  protected readonly cursorGlow = signal({ x: 0, y: 0 });

  constructor(public readonly router: Router) {}

  @HostListener('document:mousemove', ['$event'])
  protected onMouseMove(event: MouseEvent): void {
    this.cursorGlow.set({
      x: event.clientX - 15,
      y: event.clientY - 15
    });
  }

  protected get isHomeRoute(): boolean {
    return this.router.url.split('#')[0] === '/';
  }

  protected get isLegalOrPrivacyRoute(): boolean {
    const routePath = this.router.url.split('#')[0];
    return routePath === '/legal-notice' || routePath === '/privacy-policy';
  }
}
