import { Component, Input } from '@angular/core';
import { Character, Shield, WieldableItem } from 'src/app/components/Character';
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

  private _modifier: number = 0;

  get proficiencyBonus(): number {
    return this.character.savingThrows.get(this.savingThrow)!;
  }

  set proficiencyBonus(proficiencyBonus: number) {
    this.character.savingThrows.set(this.savingThrow, Number(proficiencyBonus));
    this.characterService.emitUpdate();
  }

  get modifier(): number {
    if (this.savingThrow === 'Destreza') {
      const armor = this.character.armor;
      const weildedShields: WieldableItem[] = this.characterService.character.wieldedItems.filter(wieldedItem => (wieldedItem.isWieldedInTheLeftHand && wieldedItem.item.constructor === Shield) || (wieldedItem.isWieldedInTheRightHand && wieldedItem.item.constructor === Shield));
      const shields: Shield[] = weildedShields.map(weildedShield => weildedShield.item as Shield);
      const shield: Shield | undefined = shields.length > 0 ? shields.reduce((currentShield, nextShield) => currentShield.coverageBonus >= nextShield.coverageBonus ? currentShield : nextShield) : undefined;
      return this._modifier + (armor ? armor.armorPenalty : 0) + (shield ? shield.armorPenalty : 0);
    }
    return this._modifier;
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
      this.updateSavingThrowModifier();
    });
  }

  updateSavingThrowModifier() {
    this._modifier = this.proficiencyBonus + calculateAbilityModifier(this.character.abilities.get(this.savingThrow)!);
  }
}
