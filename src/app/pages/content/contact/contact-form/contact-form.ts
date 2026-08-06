import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import {
  TranslateService,
  TranslatePipe
} from "@ngx-translate/core";

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
/**
 * Contact form component for collecting user messages.
 */
export class ContactForm {
  private fb = inject(FormBuilder);
  private translate = inject(TranslateService);

  /** Indicates whether the form was successfully submitted. */
  isSubmitted = false;

  private successHideTimeout?: ReturnType<typeof setTimeout>;

  /** Reactive form definition for the contact form inputs. */
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue]
  });

  /**
   * Checks whether a field is invalid after user interaction.
   * @param controlName Name of the form control.
   * @returns True when the control is invalid and has been touched or changed.
   */
  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  /**
   * Handles the form submission and resets the form after a successful send.
   */
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);

      clearTimeout(this.successHideTimeout);

      this.isSubmitted = true;
      this.contactForm.reset();

      this.successHideTimeout = window.setTimeout(() => {
        this.isSubmitted = false;
      }, 5500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  /**
   * Resets the touched state of a specific form field.
   * @param controlName Name of the form control.
   */
  resetField(controlName: string): void {
    const control = this.contactForm.get(controlName);
    if (control) {
      control.markAsUntouched();
    }
  }

  /**
   * Clears a field when it is still invalid.
   * @param controlName Name of the form control.
   */
  clearIfInvalid(controlName: string): void {
    const control = this.contactForm.get(controlName);
    if (control && control.invalid) {
      control.setValue('');
    }
  }
}


