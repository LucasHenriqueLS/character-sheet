import { Component, Input } from '@angular/core';
import { Character, Shield, WieldableItem } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  
  constructor(
    private characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() skill!: string;
  @Input() ability!: string;

  private _modifier: number = 0;

  get proficiencyBonus(): number {
    return this.character.skills.get(this.ability)!.get(this.skill)!;
  }
  
  set proficiencyBonus(proficiencyBonus: number) {
    this.character.skills.get(this.ability)!.set(this.skill, Number(proficiencyBonus));
    this.characterService.emitUpdate();
  }

  get modifier(): number {
    if (this.ability === 'Destreza' || this.skill === 'Atletismo') {
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
      this.updateSkillModifier();
    });
  }

  updateSkillModifier() {
    this._modifier = this.proficiencyBonus + calculateAbilityModifier(this.character.abilities.get(this.ability)!);
  }
}
