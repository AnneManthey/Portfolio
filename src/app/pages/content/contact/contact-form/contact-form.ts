import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import {
  TranslateService,
  TranslatePipe
} from "@ngx-translate/core";
import { ContactService } from '../../../../shared/services/contact-service';

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
  private contactService = inject(ContactService);

  /** Indicates whether the form was successfully submitted. */
  isSubmitted = false;
  isSending = false;
  submitError = false;

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
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.submitError = false;

    this.contactService.send({
      name: this.contactForm.value.name!,
      email: this.contactForm.value.email!,
      message: this.contactForm.value.message!,
    }).subscribe({
      next: (response) => {
        this.isSending = false;

        if (response.success) {
          clearTimeout(this.successHideTimeout);
          this.isSubmitted = true;
          this.contactForm.reset();

          this.successHideTimeout = setTimeout(() => {
            this.isSubmitted = false;
          }, 5500);
        } else {
          this.submitError = true;
        }
      },
      error: () => {
        this.isSending = false;
        this.submitError = true;
      },
    });
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


