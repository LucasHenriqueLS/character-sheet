import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-saving-throw',
  templateUrl: './saving-throw.component.html',
  styleUrls: ['./saving-throw.component.css']
})
export class SavingThrowComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() savingThrow!: string;

  public modifier: number = 0;

  get proficiencyBonus(): number {
    return this.character.savingThrows.get(this.savingThrow)!;
  }

  set proficiencyBonus(proficiencyBonus: number) {
    this.character.savingThrows.set(this.savingThrow, Number(proficiencyBonus));
    this.characterService.emitUpdate();
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
      this.updateSavingThrowModifier();
    });
  }

  updateSavingThrowModifier() {
    this.modifier = this.proficiencyBonus + calculateAbilityModifier(this.character.abilities.get(this.savingThrow)!);
  }
}
