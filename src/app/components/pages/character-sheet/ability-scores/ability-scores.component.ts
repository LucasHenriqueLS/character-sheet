import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.css']
})
export class AbilityScoresComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  private character!: Character;
  
  get abilities(): string[] {
    return Array.from(this.character.abilities.keys());
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
