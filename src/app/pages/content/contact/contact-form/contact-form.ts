import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private fb = inject(FormBuilder);

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
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }else {
      this.contactForm.markAllAsTouched(); // Falls Submit geklickt wird
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


