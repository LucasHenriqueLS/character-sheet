import { Component, Input } from '@angular/core';
import { Character, Characteristic } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.css']
})
export class CharacteristicComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() characteristic!: Characteristic;
  @Input() position!: number;

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
  
  removeCharacteristic() {
    this.character.characteristics.splice(this.position, 1);
  }
}
