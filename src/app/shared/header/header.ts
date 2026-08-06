import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

/**
 * Header component for navigation and language switching.
 */
export class Header {

  /** Indicates whether the mobile menu is currently open. */
  isMenuOpen = signal(false);
  
  /** Tracks whether the menu was opened by the menu button. */
  isMenuOpenedByButton = signal(false);

  private translate = inject(TranslateService);

  /** Stores whether the currently selected language is English. */
  isLanguageEnglish = signal(this.translate.currentLang() === 'en');

  /**
   * Toggles the mobile menu open or closed.
   */
  toggleMenu() {
    const nextState = !this.isMenuOpen();
    this.isMenuOpen.set(nextState);
    this.isMenuOpenedByButton.set(nextState);
  }

  /**
   * Updates the active language based on the toggle event.
   * @param event The change event from the language toggle.
   */
  setLanguage(event: Event) {
    const target = event.target as HTMLInputElement;
    this.isLanguageEnglish.set(target.checked);
    this.translate.use(target.checked ? 'en' : 'de');
  }

  /**
   * Closes the mobile menu.
   */
  closeMenu() {
    this.isMenuOpen.set(false);
    this.isMenuOpenedByButton.set(false);
  }

  /**
   * Registers the available languages during initialization.
   */
  constructor() {
    this.translate.addLangs(['de', 'en']);
  }
}