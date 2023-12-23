import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-sense',
  templateUrl: './sense.component.html',
  styleUrls: ['./sense.component.css']
})
export class SenseComponent {

  constructor(
    public characterService: CharacterService
  ) {}

  @Input() sense!: string;
  modifier: number = 0;
  @Input() src!: string;

  get score(): number {
    return this.characterService.character.senses.get(this.sense)!;
  }

  set score(score: number) {
    this.characterService.character.senses.set(this.sense, score);
  }

  update() {
    this.score = Number(this.score);
    this.modifier = calculateAbilityModifier(this.score);
    this.characterService.save();
  }
}
