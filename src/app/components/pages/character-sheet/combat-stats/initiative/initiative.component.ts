import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  private character!: Character;

  get initiative(): number {
    return calculateAbilityModifier(this.character.abilities.get('Destreza')!);
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
