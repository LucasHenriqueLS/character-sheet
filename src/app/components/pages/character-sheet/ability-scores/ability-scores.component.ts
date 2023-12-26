import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.css']
})
export class AbilityScoresComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  get abilities(): string[] {
    return Array.from(this.characterService.character.abilities.keys());
  }
}
