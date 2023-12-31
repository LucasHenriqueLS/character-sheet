import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-hit-dice',
  templateUrl: './hit-dice.component.html',
  styleUrls: ['./hit-dice.component.css']
})
export class HitDiceComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  get hitDice(): string[] {
    return Array.from(this.characterService.character.hitDice.keys());
  }

  addNewHitDie() {
    this.characterService.character.hitDice.set("", { total: 0, remaining: 0 });
    this.characterService.emitUpdate();
  }
}
