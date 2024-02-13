import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-death-saves',
  templateUrl: './death-saves.component.html',
  styleUrls: ['./death-saves.component.css']
})
export class DeathSavesComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  get successes1(): boolean {
    return this.character.deathSaves.successes > 0 ? true : false;
  }

  set successes1(successes1: boolean) {
    this.character.deathSaves.successes += successes1 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  get successes2(): boolean {
    return this.character.deathSaves.successes > 1 ? true : false;
  }

  set successes2(successes2: boolean) {
    this.character.deathSaves.successes += successes2 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  get successes3(): boolean {
    return this.character.deathSaves.successes > 2 ? true : false;
  }

  set successes3(successes3: boolean) {
    this.character.deathSaves.successes += successes3 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  get failures1(): boolean {
    return this.character.deathSaves.failures > 0 ? true : false;
  }

  set failures1(failures1: boolean) {
    this.character.deathSaves.failures += failures1 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  get failures2(): boolean {
    return this.character.deathSaves.failures > 1 ? true : false;
  }

  set failures2(failures2: boolean) {
    this.character.deathSaves.failures += failures2 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  get failures3(): boolean {
    return this.character.deathSaves.failures > 2 ? true : false;
  }

  set failures3(failures3: boolean) {
    this.character.deathSaves.failures += failures3 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
