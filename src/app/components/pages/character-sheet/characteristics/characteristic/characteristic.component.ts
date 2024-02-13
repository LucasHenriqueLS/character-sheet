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

  get name(): string {
    return this.characteristic.name;
  }

  set name(name: string) {
    this.characteristic.name = name;
    this.characterService.emitUpdate();
  }

  get source(): string {
    return this.characteristic.source;
  }

  set source(source: string) {
    this.characteristic.source = source;
    this.characterService.emitUpdate();
  }

  get description(): string {
    return this.characteristic.description;
  }

  set description(description: string) {
    this.characteristic.description = description;
    this.characterService.emitUpdate();
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
  
  removeCharacteristic() {
    this.character.characteristics.splice(this.position, 1);
    this.characterService.emitUpdate();
  }
}
