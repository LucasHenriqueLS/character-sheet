import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  private character!: Character;

  get speed(): number {
    return this.character.speed;
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
