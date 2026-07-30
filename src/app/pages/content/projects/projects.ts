import { Component } from '@angular/core';
import { ProjectInterface } from '../../shared/interfaces/project-interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projects: ProjectInterface[] = [
    {
      name: "Pokedex",
      skills: [
        {
          src: "/assets/icons/pages/skills/HTML.png",
          name: "HTML"
        },
        {
          src: "/assets/icons/pages/skills/CSS.png",
          name: "CSS"
        },
        {
          src: "/assets/icons/pages/skills/JavaScript.png",
          name: "JavaScript"
        },
        {
          src: "/assets/icons/pages/skills/Rest-Api.png",
          name: "API"
        }
      ],
      src: "assets/img/poke.png",
      about: " A web application that serves as a digital Pokédex, allowing users to search for Pokémon and view detailed info, stats, and data."
    },
    {
      name: "El Pollo Loco",
      skills: [
        {
          src: "/assets/icons/pages/skills/HTML.png",
          name: "HTML"
        },
        {
          src: "/assets/icons/pages/skills/CSS.png",
          name: "CSS"
        },
        {
          src: "/assets/icons/pages/skills/JavaScript.png",
          name: "JavaScript"
        }
      ],
      src: "assets/img/pollo-loco.png",
      about: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen."
    }
  ]

}
