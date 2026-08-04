import { Component, viewChild } from '@angular/core';
import { ProjectInterface } from '../../../shared/interfaces/project-interface';
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
      name: "Join",
      number: 1,
      skills: [
        {
          src: "/assets/icons/pages/skills/HTML-g.png",
          name: "HTML"
        },
        {
          src: "/assets/icons/pages/skills/CSS-g.png",
          name: "CSS"
        },
        {
          src: "/assets/icons/pages/skills/Angular-g.png",
          name: "Angular"
        },
        {
          src: "/assets/icons/pages/skills/TypeScript-g.png",
          name: "TypeScript"
        },
        {
          src: "/assets/icons/pages/skills/Supabase.png",
          name: "Supabase"
        }
      ],
      src: "assets/img/join.png",
      about: " Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
      github: "",
      link: "",
    },
    {
      name: "Pokedex",
      number: 2,
      skills: [
        {
          src: "/assets/icons/pages/skills/HTML-g.png",
          name: "HTML"
        },
        {
          src: "/assets/icons/pages/skills/CSS-g.png",
          name: "CSS"
        },
        {
          src: "/assets/icons/pages/skills/JavaScript-g.png",
          name: "JavaScript"
        },
        {
          src: "/assets/icons/pages/skills/Rest-Api.png",
          name: "API"
        }
      ],
      src: "assets/img/poke.png",
      about: " A web application that serves as a digital Pokédex, allowing users to search for Pokémon and view detailed info, stats, and data.",
      github: "https://github.com/AnneManthey/Pokedex",
      link: "",
    },
    {
      name: "El Pollo Loco",
      number: 3,
      skills: [
        {
          src: "/assets/icons/pages/skills/HTML-g.png",
          name: "HTML"
        },
        {
          src: "/assets/icons/pages/skills/CSS-g.png",
          name: "CSS"
        },
        {
          src: "/assets/icons/pages/skills/JavaScript-g.png",
          name: "JavaScript"
        }
      ],
      src: "assets/img/pollo-loco.png",
      about: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      github: "https://github.com/AnneManthey/Pollo-Loco",
      link: "",
    }
  ]

  selectedProject: ProjectInterface | null = null;

  // Zugriff auf den Dialog in der Template-Datei
  private readonly projectDialog = viewChild.required(ProjectDialog);

  openNewProjectDialog(project: ProjectInterface): void {
    this.selectedProject = project;
    // Ruft die open()-Methode des Dialogs auf
    this.projectDialog().open();
  }

  onDialogClosed(confirmed: boolean): void {
    this.selectedProject = null;

    if (confirmed) {
      console.log('User hat auf Speichern geklickt!');
    } else {
      console.log('Dialog wurde abgebrochen.');
    }
  }

  showNextProject(): void {
    if (!this.selectedProject || this.projects.length === 0) {
      return;
    }

    const currentIndex = this.projects.indexOf(this.selectedProject);
    const nextIndex = currentIndex === -1
      ? 0
      : (currentIndex + 1) % this.projects.length;

    this.selectedProject = this.projects[nextIndex];
  }

}
