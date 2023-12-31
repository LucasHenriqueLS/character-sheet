import { Component, Input } from '@angular/core';
import { Spell } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

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

  get spells(): Spell[] {
    return Array.from(this.characterService.character.spellcasting.spellsByLevel.get(this.level)!.spells.values());
  }
}
