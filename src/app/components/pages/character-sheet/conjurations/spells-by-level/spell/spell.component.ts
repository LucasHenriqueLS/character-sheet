import { Component, Input } from '@angular/core';
import { Spell } from 'src/app/components/Character';
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

  // changeSpell(): void {
  //   this.character.specializedSkills.get(this.ability)!.set(this.groupName, MapUtils.changeKey(this.character.specializedSkills.get(this.ability)!.get(this.groupName)!, this.privateSpecializedSkill, this.specializedSkill));
  //   this.characterService.emitUpdate();
  //   this.privateSpecializedSkill = this.specializedSkill;
  // }

  removeSpell() {
    this.characterService.character.spellcasting.spellsByLevel.get(this.spell.level)!.spells.delete(this.spell.name);
  }
}
