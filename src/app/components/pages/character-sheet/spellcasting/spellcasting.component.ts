import { Component } from '@angular/core';
import { SpellByLevel } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-spellcasting',
  templateUrl: './spellcasting.component.html',
  styleUrls: ['./spellcasting.component.css']
})
export class SpellcastingComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  get levels(): number[] {
    return Array.from(this.characterService.character.spellcasting.spellsByLevel.keys());
  }

  getSpellByLevel(level: number): SpellByLevel {
    return this.characterService.character.spellcasting.spellsByLevel.get(level)!;
  }

  addNewSpellsByLevel() {
    this.characterService.character.spellcasting.spellsByLevel.set(this.getNextSpellLevel(), new SpellByLevel())
  }

  private getNextSpellLevel(): number {
    const spellsByLevel = Array.from(this.characterService.character.spellcasting.spellsByLevel.keys());
    return spellsByLevel.length > 0 ? spellsByLevel.reduce((currentLevel, nextLevel) => currentLevel >= nextLevel ? currentLevel : nextLevel) + 1 : 0;
  }
}
