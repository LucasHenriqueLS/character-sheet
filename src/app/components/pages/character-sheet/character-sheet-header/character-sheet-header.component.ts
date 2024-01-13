import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-sheet-header',
  templateUrl: './character-sheet-header.component.html',
  styleUrls: ['./character-sheet-header.component.css']
})
export class CharacterSheetHeaderComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }


  get name(): string {
    return this.characterService.character.name;
  }
  
  set name(name: string) {
    this.characterService.character.name = name;
  }

  get alignment(): string {
    return this.characterService.character.alignment;
  }
  
  set alignment(alignment: string) {
    this.characterService.character.alignment = alignment;
  }

  get race(): string {
    return this.characterService.character.race;
  }
  
  set race(race: string) {
    this.characterService.character.race = race;
  }

  get sex(): string {
    return this.characterService.character.sex;
  }
  
  set sex(sex: string) {
    this.characterService.character.sex = sex;
  }

  get combatantClass(): string {
    return this.characterService.character.combatantClass;
  }
  
  set combatantClass(combatantClass: string) {
    this.characterService.character.combatantClass = combatantClass;
  }

  get backgroud(): string {
    return this.characterService.character.backgroud;
  }
  
  set backgroud(backgroud: string) {
    this.characterService.character.backgroud = backgroud;
  }

  get experience(): number {
    return this.characterService.character.experience;
  }
  
  set experience(experience: number) {
    this.characterService.character.experience = +experience;
  }

  get description(): string {
    return this.characterService.character.description;
  }
  
  set description(description: string) {
    this.characterService.character.description = description;
  }
}
