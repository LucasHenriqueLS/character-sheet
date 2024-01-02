import { Component } from '@angular/core';
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

  get total(): number {
    return this.characterService.character.proficiencyBonus.total;
  }

  set total(total: number) {
    this.characterService.character.proficiencyBonus.total = +total;
  }

  get current(): number {
    return this.characterService.character.proficiencyBonus.current;
  }

  set current(current: number) {
    this.characterService.character.proficiencyBonus.current = +current;
  }
}
