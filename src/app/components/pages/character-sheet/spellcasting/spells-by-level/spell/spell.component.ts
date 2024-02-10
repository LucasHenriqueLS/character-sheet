import { Component, Input } from '@angular/core';
import { Character, Spell } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { MapUtils } from 'src/app/util/util';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() spell!: Spell;

  get isPrepared(): boolean {
    return this.spell.isPrepared;
  }

  set isPrepared(isPrepared: boolean) {
    this.spell.isPrepared = isPrepared;
  }

  get name(): string {
    return this.spell.name;
  }

  set name(name: string) {
    this.spell.name = name;
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }

  removeSpell() {
    const spells = this.character.spellcasting.spellsByLevel.get(this.spell.level)!.spells;
    spells.splice(spells.findIndex(spell => spell.name === this.name), 1);
  }
}
