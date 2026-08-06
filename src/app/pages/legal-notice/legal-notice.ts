import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  private translate = inject(TranslateService);
}
