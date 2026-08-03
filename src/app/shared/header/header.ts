import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isMenuOpen = signal(false);
  isMenuOpenedByButton = signal(false);
  isLanguageEnglish = signal(false);

  toggleMenu() {
    const nextState = !this.isMenuOpen();
    this.isMenuOpen.set(nextState);
    this.isMenuOpenedByButton.set(nextState);
  }

  setLanguage(event: Event) {
    const target = event.target as HTMLInputElement;
    this.isLanguageEnglish.set(target.checked);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    this.isMenuOpenedByButton.set(false);
  }
}
