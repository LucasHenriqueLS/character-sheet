import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
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
  ) { }

  private character!: Character;

  @Input() sense!: string;
  @Input() src!: string;

  public modifier: number = 0;

  get score(): number {
    return this.character.senses.get(this.sense)!;
  }

  set score(score: number) {
    this.character.senses.set(this.sense, Number(score));
    this.characterService.emitUpdate();
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
      this.updateSenseModifier();
    });
  }

  updateSenseModifier() {
    this.modifier = calculateAbilityModifier(this.score);
  }
}
