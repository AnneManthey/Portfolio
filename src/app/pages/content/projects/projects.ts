import { Component, viewChild, inject } from '@angular/core';
import { ProjectInterface } from '../../../shared/interfaces/project-interface';
import { ProjectDialog } from './project-dialog/project-dialog';
import {
    TranslateService,
    TranslatePipe
} from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  imports: [ProjectDialog, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})

/**
 * Component for displaying the portfolio projects.
 */
export class Projects {
  private translate = inject(TranslateService);

  /** List of available projects shown in the portfolio. */
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
      about: "PROJECTS.DIALOG.JOIN",
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
      about: "PROJECTS.DIALOG.POKE",
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
      about: "PROJECTS.DIALOG.POLLO",
      github: "https://github.com/AnneManthey/Pollo-Loco",
      link: "",
    }
  ]

  /** Currently selected project for the detail dialog. */
  selectedProject: ProjectInterface | null = null;

  /** Reference to the project dialog component. */
  private readonly projectDialog = viewChild.required(ProjectDialog);

  /**
   * Opens the project dialog for the selected project.
   * @param project The project to display.
   */
  openNewProjectDialog(project: ProjectInterface): void {
    this.selectedProject = project;
    this.projectDialog().open();
  }

  /**
   * Handles the dialog close event.
   * @param confirmed Indicates whether the user confirmed the action.
   */
  onDialogClosed(confirmed: boolean): void {
    this.selectedProject = null;
    if (confirmed) {
      console.log('User hat auf Speichern geklickt!');
    } else {
      console.log('Dialog wurde abgebrochen.');
    }
  }

  /**
   * Switches to the next project in the list.
   */
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
