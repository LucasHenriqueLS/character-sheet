import { Component, Input } from '@angular/core';
import { Spell, SpellByLevel } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { MapUtils } from 'src/app/util/util';

@Component({
  selector: 'app-spells-by-level',
  templateUrl: './spells-by-level.component.html',
  styleUrls: ['./spells-by-level.component.css']
})
export class SpellsByLevelComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  @Input() level!: number;
  private spellByLevel!: SpellByLevel;

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
    this.spellByLevel = this.characterService.character.spellcasting.spellsByLevel.get(this.level)!;
    this.privateLevel = this.level;
  }

  changeSpellsPerLevel(): void {
    if (this.characterService.character.spellcasting.spellsByLevel.has(this.level)) {
      this.removeSpellsPerLevel();
    } else {
      this.characterService.character.spellcasting.spellsByLevel = MapUtils.changeKey(this.characterService.character.spellcasting.spellsByLevel, this.privateLevel, this.level);
      this.privateLevel = this.level;
    }
  }

  removeSpellsPerLevel() {
    this.characterService.character.spellcasting.spellsByLevel.delete(this.level);
  }
}
