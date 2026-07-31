import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  
}
