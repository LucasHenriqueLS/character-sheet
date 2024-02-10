import { Component, Input } from '@angular/core';
import { Character, Item, Shield, Weapon, WieldableItem } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-wielded-item',
  templateUrl: './wielded-item.component.html',
  styleUrls: ['./wielded-item.component.css']
})
export class WieldedItemComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() wieldedItem!: WieldableItem;

  get item(): Item | undefined {
    return (this.wieldedItem.item.constructor === Item) ? this.wieldedItem.item : undefined;
  }

  get weapon(): Weapon | undefined {
    return (this.wieldedItem.item.constructor === Weapon) ? this.wieldedItem.item : undefined;
  }

  get shield(): Shield | undefined {
    return (this.wieldedItem.item.constructor === Shield) ? this.wieldedItem.item : undefined;
  }

  public attackBonus!: number;
  public damageBonus!: number;

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
      this.updateAttackAndDamageBonusModifier();
    });
  }

  updateAttackAndDamageBonusModifier() {
    let item: Weapon | Shield | undefined;
    if (this.wieldedItem.item.constructor === Weapon) {
      item = this.weapon;
    }
    if (this.wieldedItem.item.constructor === Shield) {
      item = this.shield;
    }
    if (item) {
      if (item.type.includes('Arma Corpo a Corpo')) {
        const strength: number = this.character.abilities.get('Força')!;
        if (item.properties.includes('Acuidade')) {
          const dexterity: number = this.character.abilities.get('Destreza')!;
          this.damageBonus = calculateAbilityModifier((strength >= dexterity) ? strength : dexterity);
        } else {
          this.damageBonus = calculateAbilityModifier(strength);
        }
        this.attackBonus = this.damageBonus;
        if (this.character.specializedSkills.get('Força')!.get('Armas')!.has(item.classification)) {
          this.attackBonus += this.character.specializedSkills.get('Força')!.get('Armas')!.get(item.classification)!;
        }
      } else {
        this.attackBonus = this.damageBonus = calculateAbilityModifier(this.character.abilities.get('Destreza')!);
        if (this.character.specializedSkills.get('Destreza')!.get('Armas')!.has(item.classification)) {
          this.attackBonus += this.character.specializedSkills.get('Destreza')!.get('Armas')!.get(item.classification)!;
        }
        const armor = this.character.armor;
        const weildedShields: WieldableItem[] = this.characterService.character.wieldedItems.filter(wieldedItem => (wieldedItem.isWieldedInTheLeftHand && wieldedItem.item.constructor === Shield) || (wieldedItem.isWieldedInTheRightHand && wieldedItem.item.constructor === Shield));
        const shields: Shield[] = weildedShields.map(weildedShield => weildedShield.item as Shield);
        const shield: Shield | undefined = shields.length > 0 ? shields.reduce((currentShield, nextShield) => currentShield.coverageBonus >= nextShield.coverageBonus ? currentShield : nextShield) : undefined;
        this.attackBonus += (armor ? armor.armorPenalty : 0) + (shield ? shield.armorPenalty : 0);
      }
    }
  }

  wieldOrUnwieldInTheLeftHand(): void {
    const wieldedItems = this.characterService.character.wieldedItems;
    const previouslyWieldedItem = wieldedItems.find(wieldedItem => wieldedItem.isWieldedInTheLeftHand);
    this.wieldedItem.isWieldedInTheLeftHand = !this.wieldedItem.isWieldedInTheLeftHand;
    if (this.wieldedItem.isWieldedInTheLeftHand) {
      if (previouslyWieldedItem !== undefined) {
        previouslyWieldedItem.isWieldedInTheLeftHand = false;
      }
      let index = wieldedItems.findIndex(wieldedItem => wieldedItem.id === this.wieldedItem.id);
      wieldedItems.splice(index, 1);
      const a = wieldedItems.find(wieldedItem => wieldedItem.isWieldedInTheLeftHand || wieldedItem.isWieldedInTheRightHand);
      if (a) {
        index = wieldedItems.findIndex(wieldedItem => wieldedItem.id === a.id);
        wieldedItems.splice(index, 1);
        wieldedItems.unshift(a);
        wieldedItems.splice(1, 0, this.wieldedItem);
      } else {
        wieldedItems.splice(0, 0, this.wieldedItem);
      }
    } else {
      const index = wieldedItems.findIndex(wieldedItem => wieldedItem.id === this.wieldedItem.id);
      if (wieldedItems.find(wieldedItem => (wieldedItem.isWieldedInTheLeftHand || wieldedItem.isWieldedInTheRightHand) && wieldedItem.id !== this.wieldedItem.id)) {
        wieldedItems.splice(index, 1);
        wieldedItems.splice(1, 0, this.wieldedItem);
      }
    }
  }

  wieldOrUnwieldInTheRightHand(): void {
    const wieldedItems = this.characterService.character.wieldedItems;
    const previouslyWieldedItem = wieldedItems.find(wieldedItem => wieldedItem.isWieldedInTheRightHand);
    this.wieldedItem.isWieldedInTheRightHand = !this.wieldedItem.isWieldedInTheRightHand;
    if (this.wieldedItem.isWieldedInTheRightHand) {
      if (previouslyWieldedItem !== undefined) {
        previouslyWieldedItem.isWieldedInTheRightHand = false;
      }
      let index = wieldedItems.findIndex(wieldedItem => wieldedItem.id === this.wieldedItem.id);
      wieldedItems.splice(index, 1);
      const a = wieldedItems.find(wieldedItem => wieldedItem.isWieldedInTheLeftHand || wieldedItem.isWieldedInTheRightHand);
      if (a) {
        index = wieldedItems.findIndex(wieldedItem => wieldedItem.id === a.id);
        wieldedItems.splice(index, 1);
        wieldedItems.unshift(a);
        wieldedItems.splice(1, 0, this.wieldedItem);
      } else {
        wieldedItems.splice(0, 0, this.wieldedItem);
      }
    } else {
      const index = wieldedItems.findIndex(wieldedItem => wieldedItem.id === this.wieldedItem.id);
      wieldedItems.splice(index, 1);
      wieldedItems.splice(index, 0, this.wieldedItem);
      if (wieldedItems.find(wieldedItem => (wieldedItem.isWieldedInTheLeftHand || wieldedItem.isWieldedInTheRightHand) && wieldedItem.id !== this.wieldedItem.id)) {
        wieldedItems.splice(index, 1);
        wieldedItems.splice(1, 0, this.wieldedItem);
      }
    }
  }

  removeWieldedItem() {
    const wieldedItems = this.characterService.character.wieldedItems;
    const index = wieldedItems.findIndex(wieldedItem => wieldedItem.id === this.wieldedItem.id);
    wieldedItems.splice(index, 1);
  }
}
