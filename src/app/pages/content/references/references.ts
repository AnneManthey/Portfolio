import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {

  currentIndex = 0;

  refer = [{
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti recusandae libero saepe soluta dignissimos. Quisquam cumque delectus, laborum at ex nisi eos, iure necessitatibus quasi accusantium asperiores consequuntur odio praesentium.",
    name: "Jane Dow"
  },
{
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti recusandae libero saepe soluta dignissimos. Quisquam cumque delectus, laborum at ex nisi eos, iure necessitatibus quasi accusantium asperiores consequuntur odio praesentium.",
    name: "Max Musterman"
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti recusandae libero saepe soluta dignissimos. Quisquam cumque delectus, laborum at ex nisi eos, iure necessitatibus quasi accusantium asperiores consequuntur odio praesentium.",
    name: "Shallan Kholin"
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
