import { Component, Input } from '@angular/core';
import { Character, Spell } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

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
    this.characterService.character.spellcasting.spellsByLevel.get(this.spell.level)!.spells.splice(this.characterService.character.spellcasting.spellsByLevel.get(this.spell.level)!.spells.findIndex(spell => spell.name === this.spell.name), 1);
  }
}
