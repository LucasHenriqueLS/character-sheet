import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-senses',
  templateUrl: './senses.component.html',
  styleUrls: ['./senses.component.css']
})
export class SensesComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
