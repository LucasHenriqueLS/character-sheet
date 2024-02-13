import { Component, Input } from '@angular/core';
import { Character, WieldableItem } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-wielded-items',
  templateUrl: './wielded-items.component.html',
  styleUrls: ['./wielded-items.component.css']
})
export class WieldedItemsComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  private character!: Character;

  get wieldedItems(): WieldableItem[] {
    return this.character.wieldedItems;
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
