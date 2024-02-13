import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
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

  private character!: Character;

  get name(): string {
    return this.character.name;
  }
  
  set name(name: string) {
    this.character.name = name;
    this.characterService.emitUpdate();
  }

  get alignment(): string {
    return this.character.alignment;
  }
  
  set alignment(alignment: string) {
    this.character.alignment = alignment;
    this.characterService.emitUpdate();
  }

  get race(): string {
    return this.character.race;
  }
  
  set race(race: string) {
    this.character.race = race;
    this.characterService.emitUpdate();
  }

  get sex(): string {
    return this.character.sex;
  }
  
  set sex(sex: string) {
    this.character.sex = sex;
    this.characterService.emitUpdate();
  }

  get combatantClass(): string {
    return this.character.combatantClass;
  }
  
  set combatantClass(combatantClass: string) {
    this.character.combatantClass = combatantClass;
    this.characterService.emitUpdate();
  }

  get backgroud(): string {
    return this.character.backgroud;
  }
  
  set backgroud(backgroud: string) {
    this.character.backgroud = backgroud;
    this.characterService.emitUpdate();
  }

  get experience(): number {
    return this.character.experience;
  }
  
  set experience(experience: number) {
    this.character.experience = +experience;
    this.characterService.emitUpdate();
  }

  get description(): string {
    return this.character.description;
  }
  
  set description(description: string) {
    this.character.description = description;
    this.characterService.emitUpdate();
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
