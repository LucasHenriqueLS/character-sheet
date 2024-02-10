import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  get savingThrows(): string[] {
    return Array.from(this.characterService.character.savingThrows.keys());
  }
}
