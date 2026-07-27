import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
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


  ]

}
