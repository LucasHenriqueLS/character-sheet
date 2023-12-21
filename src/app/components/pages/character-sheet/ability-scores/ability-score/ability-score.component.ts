import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-ability-score',
  templateUrl: './ability-score.component.html',
  styleUrls: ['./ability-score.component.css']
})
export class AbilityScoreComponent {

  constructor(private characterService: CharacterService) { }
  
  @Input() ability!: string;
  value: string = '';

  abilityMap: Map<string, string> = new Map([
    ["Força", "strength"],
    ["Destreza", "dexterity"],
    ["Constituição", "constitution"],
    ["Inteligência", "intelligence"],
    ["Sabedoria", "wisdom"],
    ["Carisma", "charisma"],
  ])

  save() {

    this.characterService.seuObjeto[this.abilityMap.get(this.ability)!] = this.value;

    console.log(this.characterService.seuObjeto)
  }
}
