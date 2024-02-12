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

  private character!: Character;

  get hitDice(): string[] {
    return Array.from(this.character.hitDice.keys());
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }

  addNewHitDie() {
    this.character.hitDice.set("", { total: 0, remaining: 0 });
    this.characterService.emitUpdate();
  }
}
