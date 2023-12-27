import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  get abilities(): string[] {
    return Array.from(this.characterService.character.skills.keys());
  }
}
