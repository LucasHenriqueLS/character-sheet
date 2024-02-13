import { Component } from '@angular/core';
import { Character, Characteristic } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  get characteristics(): Characteristic[] {
    return this.character.characteristics;
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }

  addNewCharacteristic() {
    this.character.characteristics.push(new Characteristic);
    this.characterService.emitUpdate();
  }
}
