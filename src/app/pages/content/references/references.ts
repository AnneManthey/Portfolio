import { Component, inject } from '@angular/core';
import {
    TranslateService,
    TranslatePipe
} from "@ngx-translate/core";

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
/**
 * Component for displaying testimonials and references.
 */
export class References {
  private translate = inject(TranslateService);

  /** Index of the currently visible reference. */
  currentIndex = 0;

  /** Collection of references shown in the carousel. */
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

  /**
   * Moves to the next reference.
   */
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.refer.length;
  }

  /**
   * Moves to the previous reference.
   */
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.refer.length) % this.refer.length;
  }

  /**
   * Jumps to a specific reference by index.
   * @param index The target reference index.
   */
  goTo(index: number) {
    if (index === this.currentIndex) {
      return;
    }
    this.currentIndex = index;
  }

  /**
   * Calculates the visual offset for a reference item in the carousel.
   * @param index The index of the reference.
   * @returns The offset relative to the currently active item.
   */
  getOffset(index: number): number {
    const total = this.refer.length;
    let offset = index - this.currentIndex;

    if (offset > total / 2) {
      offset -= total;
    } else if (offset < -total / 2) {
      offset += total;
    }
    return offset;
  }
}
