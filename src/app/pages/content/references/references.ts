import { Component, inject } from '@angular/core';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  private translate = inject(TranslateService);

  currentIndex = 0;

  refer = [{
    text: "REF.T1",
    name: "REF.N1"
  },
{
    text: "REF.T2",
    name: "REF.N2"
  },
  {
    text: "REF.T3",
    name: "REF.N3"
  },
];

next() {
    this.currentIndex = (this.currentIndex + 1) % this.refer.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.refer.length) % this.refer.length;
  }

  goTo(index: number) {
    if (index === this.currentIndex) {
      return;
    }
    this.currentIndex = index;
  }

  getOffset(index: number): number {
    const total = this.refer.length;
    let offset = index - this.currentIndex;

    // Symmetrische Verteilung um die aktive Karte: links und rechts bleiben sichtbar.
    if (offset > total / 2) {
      offset -= total;
    } else if (offset < -total / 2) {
      offset += total;
    }

    return offset;
  }
}
