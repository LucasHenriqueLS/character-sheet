import { Component, Input } from '@angular/core';
import { Character, Spell, SpellByLevel } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { MapUtil } from 'src/app/util/util';

@Component({
  selector: 'app-spells-by-level',
  templateUrl: './spells-by-level.component.html',
  styleUrls: ['./spells-by-level.component.css']
})
export class SpellsByLevelComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() level!: number;
  @Input() spellByLevel!: SpellByLevel;

  private privateLevel!: number;

  get totalSlots(): number {
    return this.spellByLevel.totalSlots;
  }

  set totalSlots(totalSlots: number) {
    this.totalSlots = totalSlots;
  }

  get currentSlots(): number {
    return this.spellByLevel.currentSlots;
  }

  set currentSlots(currentSlots: number) {
    this.currentSlots = currentSlots;
  }

  get spells(): Spell[] {
    return Array.from(this.spellByLevel.spells.values());
  }

  ngOnInit() {
    this.privateLevel = this.level;
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }

  changeSpellsPerLevel(): void {
    if (this.character.spellcasting.spellsByLevel.has(this.level)) {
      this.removeSpellsPerLevel();
    } else {
      this.character.spellcasting.spellsByLevel = MapUtil.changeKey(this.character.spellcasting.spellsByLevel, this.privateLevel, this.level);
      this.privateLevel = this.level;
    }
  }

  isTheHighestLevel(): boolean {
    return this.level === Array.from(this.character.spellcasting.spellsByLevel.keys()).reduce((currentLevel, nextLevel) => currentLevel >= nextLevel ? currentLevel : nextLevel);
  }

  removeSpellsPerLevel() {
    this.character.spellcasting.spellsByLevel.delete(this.level);
  }

  addNewSpell() {
    this.spellByLevel.spells.push({ name: '', level: this.level, isPrepared: false });
    this.characterService.emitUpdate();
  }
}
