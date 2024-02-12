import { Component } from '@angular/core';
import { Character, SpellByLevel } from 'src/app/components/Character';
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

  private character!: Character;

  get levels(): number[] {
    return Array.from(this.character.spellcasting.spellsByLevel.keys());
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }

  getSpellByLevel(level: number): SpellByLevel {
    return this.character.spellcasting.spellsByLevel.get(level)!;
  }

  addNewSpellsByLevel() {
    this.character.spellcasting.spellsByLevel.set(this.getNextSpellLevel(), new SpellByLevel())
  }

  private getNextSpellLevel(): number {
    const spellsByLevel = Array.from(this.character.spellcasting.spellsByLevel.keys());
    return spellsByLevel.length > 0 ? spellsByLevel.reduce((currentLevel, nextLevel) => currentLevel >= nextLevel ? currentLevel : nextLevel) + 1 : 0;
  }
}
