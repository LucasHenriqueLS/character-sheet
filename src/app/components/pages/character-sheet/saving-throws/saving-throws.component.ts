import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
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

  private character!: Character;

  get savingThrows(): string[] {
    return Array.from(this.character.savingThrows.keys());
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
