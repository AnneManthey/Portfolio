import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private fb = inject(FormBuilder);
  private translate = inject(TranslateService);

  isSubmitted = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue]
  });

  // Helper zum Prüfen, ob ein Feld ungültig & vom User berührt wurde
  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);

      // 1. Erfolgsmeldung anzeigen
      this.isSubmitted = true;

      // 2. Formular zurücksetzen
      this.contactForm.reset();

      // 3. Optional: Meldung nach 5 Sekunden wieder ausblenden
      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  resetField(controlName: string): void {
  const control = this.contactForm.get(controlName);
  if (control) {
    control.markAsUntouched();
  }
}

clearIfInvalid(controlName: string): void {
  const control = this.contactForm.get(controlName);
  if (control && control.invalid) {
    control.setValue('');
  }
}



}


