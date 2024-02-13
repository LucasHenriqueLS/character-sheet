import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-proficiency-bonus',
  templateUrl: './proficiency-bonus.component.html',
  styleUrls: ['./proficiency-bonus.component.css']
})
export class ProficiencyBonusComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  private character!: Character;

  get total(): number {
    return this.character.proficiencyBonus.total;
  }

  set total(total: number) {
    this.character.proficiencyBonus.total = +total;
    this.characterService.emitUpdate();
  }

  get current(): number {
    return this.character.proficiencyBonus.current;
  }

  set current(current: number) {
    this.character.proficiencyBonus.current = +current;
    this.characterService.emitUpdate();
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
