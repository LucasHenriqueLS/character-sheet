import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-ability-score',
  templateUrl: './ability-score.component.html',
  styleUrls: ['./ability-score.component.css']
})
export class AbilityScoreComponent {

  constructor(private characterService: CharacterService) { }
  
  score: number = 0;
  @Input() ability!: string;
  @Input() modifier: number = Math.floor((this.score - 10) / 2);

  abilityMap: Map<string, string> = new Map([
    ["Força", "strength"],
    ["Destreza", "dexterity"],
    ["Constituição", "constitution"],
    ["Inteligência", "intelligence"],
    ["Sabedoria", "wisdom"],
    ["Carisma", "charisma"],
  ]);

  update() {
    this.score = Number(this.score);
    this.modifier = calculateAbilityModifier(this.score);
    this.characterService.character.abilities.set(this.abilityMap.get(this.ability)!, this.score);

    this.characterService.save();
  }
}
