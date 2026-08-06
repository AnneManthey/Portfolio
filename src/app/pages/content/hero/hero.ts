import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    TranslateService,
    TranslatePipe
} from "@ngx-translate/core";

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private translate = inject(TranslateService);
}
