import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-specialized-skills',
  templateUrl: './specialized-skills.component.html',
  styleUrls: ['./specialized-skills.component.css']
})
export class SpecializedSkillsComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  public ability!: string;

  get abilities(): string[] {
    return Array.from(this.characterService.character.specializedSkills.keys());
  }

  public getGroupNames(ability: string): string[] {
    return Array.from(this.characterService.character.specializedSkills.get(ability)!.keys());
  }
}
