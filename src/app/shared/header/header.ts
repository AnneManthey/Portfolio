import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isMenuOpen = signal(false);
  isMenuOpenedByButton = signal(false);

  private translate = inject(TranslateService);

  // eigenes Signal, sofort und optimistisch gesetzt – wartet nicht auf den Ladevorgang
  isLanguageEnglish = signal(this.translate.currentLang() === 'en');

  toggleMenu() {
    const nextState = !this.isMenuOpen();
    this.isMenuOpen.set(nextState);
    this.isMenuOpenedByButton.set(nextState);
  }

  setLanguage(event: Event) {
    const target = event.target as HTMLInputElement;
    this.isLanguageEnglish.set(target.checked); // sofort, unabhängig vom Ladevorgang
    this.translate.use(target.checked ? 'en' : 'de');
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    this.isMenuOpenedByButton.set(false);
  }

  constructor() {
    this.translate.addLangs(['de', 'en']);
  }
}