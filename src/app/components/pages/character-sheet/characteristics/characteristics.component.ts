import { Component } from '@angular/core';
import { Characteristic } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent {

  constructor(
    public characterService: CharacterService
  ) {}

  addNewCharacteristic() {
    this.characterService.character.characteristics.push(new Characteristic);
  }
}
