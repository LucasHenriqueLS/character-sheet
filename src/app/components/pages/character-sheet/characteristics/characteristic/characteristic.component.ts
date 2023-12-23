import { Component, Input } from '@angular/core';
import { Characteristic } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.css']
})
export class CharacteristicComponent {

  constructor(
    public characterService: CharacterService
  ) {}

  @Input() characteristic!: Characteristic;
  @Input() position!: number;
  
  removeCharacteristic() {
    this.characterService.character.characteristics.splice(this.position, 1);
  }
}
