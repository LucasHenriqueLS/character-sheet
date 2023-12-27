import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-specialized-skill-group',
  templateUrl: './specialized-skill-group.component.html',
  styleUrls: ['./specialized-skill-group.component.css']
})
export class SpecializedSkillGroupComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  @Input() ability!: string;
  @Input() groupName!: string;

  get specializedSkills(): string[] {
    return Array.from(this.characterService.character.specializedSkills.get(this.ability)!.get(this.groupName)!.keys());
  }

  addNewSpecializedSkill() {
    this.characterService.character.specializedSkills.get(this.ability)!.get(this.groupName)!.set("-", 0);
    this.characterService.emitUpdate();
  }
}
