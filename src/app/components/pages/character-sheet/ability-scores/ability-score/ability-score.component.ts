import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { TranslateFromTo, calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-ability-score',
  templateUrl: './ability-score.component.html',
  styleUrls: ['./ability-score.component.css']
})
export class AbilityScoreComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() ability!: string;
  public modifier!: number;

  get score(): number {
    return this.character.abilities.get(this.ability!)!;
  }

  set score(score: number) {
    this.character.abilities.set(this.ability!, Number(score));
    this.characterService.emitUpdate();
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
      this.onUpdateAbilityScore();
    });
  }

  onUpdateAbilityScore() {
    this.modifier = calculateAbilityModifier(this.score);
  }
}
