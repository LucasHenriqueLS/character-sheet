import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { TranslateFromTo } from 'src/app/util/util';

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
    this.characterService.character[TranslateFromTo.translateSpecializedSkillGroupFromPTToEN(this.groupName)!].set("-", 0);
  }
}
