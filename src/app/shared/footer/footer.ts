import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    TranslateService,
    TranslatePipe
} from "@ngx-translate/core";


@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private translate = inject(TranslateService);
}
