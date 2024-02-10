import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.css']
})
export class SkillGroupComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  @Input() ability!: string;

  get skills(): string[] {
    return Array.from(this.characterService.character.skills.get(this.ability)!.keys());
  }
}
