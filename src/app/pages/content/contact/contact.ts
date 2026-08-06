import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ContactForm } from './contact-form/contact-form';
import {
    TranslateService,
    TranslatePipe,
} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactForm, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private translate = inject(TranslateService);
  
}
