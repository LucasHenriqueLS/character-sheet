import { Component, Input } from '@angular/core';
import { Character, Item, Shield, Weapon, WieldableItem } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

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

  wieldOrUnwieldInTheLeftHand(): void {
    console.log(this.wieldedItem.isWieldedInTheLeftHand);
    const a = this.characterService.character.wieldedItems.find(wieldedItem => wieldedItem.isWieldedInTheLeftHand);
    this.wieldedItem.isWieldedInTheLeftHand = !this.wieldedItem.isWieldedInTheLeftHand;
    console.log(this.wieldedItem.isWieldedInTheLeftHand);
    console.log(this.wieldedItem);
    if (this.wieldedItem.isWieldedInTheLeftHand) {
      if (a !== undefined) {
        this.characterService.character.wieldedItems.splice(a.item.position, 1);
        a.isWieldedInTheLeftHand = false;
        a.item.position++;
        this.characterService.character.wieldedItems.splice(a.item.position, 0, a);
      }
      this.characterService.character.wieldedItems.splice(this.wieldedItem.item.position, 1);
      this.wieldedItem.item.position = 0;
      this.characterService.character.wieldedItems.unshift(this.wieldedItem);
    } else {
      console.log(this.wieldedItem.item.position);
      this.characterService.character.wieldedItems.splice(this.wieldedItem.item.position, 1);
      this.wieldedItem.item.position++;
      console.log(this.wieldedItem.item.position);
      this.characterService.character.wieldedItems.splice(this.wieldedItem.item.position, 0, this.wieldedItem);
      console.log(this.wieldedItem.item.position);
    }
  }
}
