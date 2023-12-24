import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-specialized-skill-group',
  templateUrl: './specialized-skill-group.component.html',
  styleUrls: ['./specialized-skill-group.component.css']
})
export class SpecializedSkillGroupComponent {

  constructor(
    public characterService: CharacterService
  ) {}

  @Input() groupName!: string;
  @Input() specializedSkills!: string[];
  @Input() ability!: string;

  addNewSpecializedSkill() {
    this.characterService.character[this.translateSpecializedSkillFromPTToEN(this.groupName)!].set("-", 0);
  }

  translateSpecializedSkillFromPTToEN(skill: string): string | undefined {
    switch (skill) {
      case "Conhecimentos":
        return "knowledge";
      case "Ferramentas":
        return "tools";
      case "Profissões":
        return "professions";
      case "Atuações":
        return "performances";
    }
    return undefined;
  }
}
