import { Component, viewChild } from '@angular/core';
import { ProjectInterface } from '../../shared/interfaces/project-interface';
import { ProjectDialog } from './project-dialog/project-dialog';

@Component({
  selector: 'app-projects',
  imports: [ProjectDialog],
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

  // Zugriff auf den Dialog in der Template-Datei
  private readonly projectDialog = viewChild.required(ProjectDialog);

  openNewProjectDialog(): void {
    // Ruft die open()-Methode des Dialogs auf
    this.projectDialog().open();
  }

  onDialogClosed(confirmed: boolean): void {
    if (confirmed) {
      console.log('User hat auf Speichern geklickt!');
    } else {
      console.log('Dialog wurde abgebrochen.');
    }
  }

}
