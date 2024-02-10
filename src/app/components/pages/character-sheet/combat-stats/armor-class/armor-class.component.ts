import { Component } from '@angular/core';
import { Character, Shield, WieldableItem } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.component.html',
  styleUrls: ['./armor-class.component.css']
})
export class ArmorClassComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  private character!: Character;

  get name(): string {
    return this.character.armor.name;
  }

  get dodgeBonus(): number {
    return 10 + Math.min(calculateAbilityModifier(this.character.abilities.get('Destreza')!), this.character.armor.limiteDexterityModifier) + this.character.armor.armorPenalty; // Math.min( + (shield ? shield.armorPenalty : 0), 10 + Math.min(calculateAbilityModifier(this.character.abilities.get('Destreza')!), this.character.armor.limiteDexterityModifier));
  }

  get armorBonus(): number {
    return this.character.armor.armorBonus;
  }

  get shieldBonus(): number {
    const weildedShields: WieldableItem[] = this.characterService.character.wieldedItems.filter(wieldedItem => (wieldedItem.isWieldedInTheLeftHand && wieldedItem.item.constructor === Shield) || (wieldedItem.isWieldedInTheRightHand && wieldedItem.item.constructor === Shield));
    const shields: Shield[] = weildedShields.map(weildedShield => weildedShield.item as Shield);
    const shield: Shield | undefined = shields.length > 0 ? shields.reduce((currentShield, nextShield) => currentShield.coverageBonus >= nextShield.coverageBonus ? currentShield : nextShield) : undefined;
    return shield ? shield.coverageBonus : 0;
  }

  get hit(): number {
    return this.dodgeBonus + this.armorBonus + this.shieldBonus + 1;
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
