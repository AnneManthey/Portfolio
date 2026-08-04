import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  skillList = [
    {
      src: "/assets/icons/pages/skills/HTML.png",
      name:"HTML"
    },
    {
      src: "/assets/icons/pages/skills/CSS.png",
      name:"CSS"
    },
    {
      src: "/assets/icons/pages/skills/JavaScript.png",
      name:"JavaScript"
    },
    {
      src: "/assets/icons/pages/skills/TypeScript.png",
      name:"TypeScript"
    },
    {
      src: "/assets/icons/pages/skills/Angular.png",
      name:"Angular"
    },
    {
      src: "/assets/icons/pages/skills/Supabase.png",
      name:"Supabase"
    },
    {
      src: "/assets/icons/pages/skills/Git.png",
      name:"Git"
    },
    {
      src: "/assets/icons/pages/skills/Rest-Api.png",
      name:"API"
    },
    {
      src: "/assets/icons/pages/skills/Python.png",
      name:"Python"
    },
    {
      src: "/assets/icons/pages/skills/Django.png",
      name:"Django"
    },
    {
      src: "/assets/icons/pages/skills/Docker.png",
      name:"Docker"
    },
    {
      src: "/assets/icons/pages/skills/SQL.png",
      name:"SQL"
    },
    {
      src: "/assets/icons/pages/skills/Cloud.png",
      name:"Cloud"
    },
    
    


  ]

}
