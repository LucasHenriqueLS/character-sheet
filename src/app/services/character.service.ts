import { Injectable } from '@angular/core';
import { Character, HitDie } from '../components/Character';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import MapifyTs from 'mapify-ts';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  constructor(
    private readonly http: HttpClient
  ) { }

  private characterSource = new BehaviorSubject<Character>(new Character());
  public character$ = this.characterSource.asObservable();

  get character(): Character {
    return this.characterSource.getValue();
  }

  set character(character: Character) {
    this.characterSource.next(character);
  }

  emitUpdate() {
    // Atualiza o BehaviorSubject com uma cópia atualizada do personagem
    this.characterSource.next(this.character);
    this.save();
  }

  async loadCharacterByName(name: string): Promise<void> {
    const response = await this.http.get<any>(`http://localhost:10000/character/get-by-name/${name}`).toPromise();

      const data: any = MapifyTs.serialize(response);
      const character: Character = new Character();

      character.id = data.id;
      character.name = data.name;
      character.alignment = data.alignment;
      character.race = data.race;
      character.sex = data.sex;
      character.combatantClass = data.combatantClass;
      character.backgroud = data.backgroud;
      character.experience = data.experience;
      character.description = data.description;
      character.inspirations = data.inspirations;
      character.maxLifePoints = data.maxLifePoints;
      character.currentLifePoints = data.currentLifePoints;
      character.temporaryLifePoints = data.temporaryLifePoints;
      character.hitDice = new Map();
      for (const key in data.hitDice) {
        character.hitDice.set(key, data.hitDice[key]);
      }
      character.deathSaves = data.deathSaves;
      character.proficiencyBonus = data.proficiencyBonus;
      character.abilities = new Map();
      for (const key in data.abilities) {
        character.abilities.set(key, data.abilities[key]);
      }
      character.savingThrows = new Map();
      for (const key in data.savingThrows) {
        character.savingThrows.set(key, data.savingThrows[key]);
      }
      character.skills = new Map();
      for (const key in data.skills) {
        character.skills.set(key, new Map());
        for (const key2 in data.skills[key]) {
          character.skills.get(key)!.set(key2, data.skills[key][key2]);
        }
      }
      character.specializedSkills = new Map();
      for (const key in data.specializedSkills) {
        character.specializedSkills.set(key, new Map());
        for (const key2 in data.specializedSkills[key]) {
          character.specializedSkills.get(key)!.set(key2, new Map());
          for (const key3 in data.specializedSkills[key][key2]) {
            character.specializedSkills.get(key)!.get(key2)!.set(key3, data.specializedSkills[key][key2][key3]);
          }
        }
      }
      character.senses = new Map();
      for (const key in data.senses) {
        character.senses.set(key, data.senses[key]);
      }
      character.wieldedItems = data.wieldedItems;
      character.armor = data.armor;
      character.characteristics = data.characteristics;

      console.log(data);

      character.spellcasting = data.spellcasting;
      character.spellcasting.spellsByLevel = new Map();
      for (const key in response.spellcasting.spellsByLevel) {
        character.spellcasting.spellsByLevel.set(+key, data.spellcasting.spellsByLevel[key]);
      }

      // console.log(this.character.hitDice)
      // console.log(MapifyTs.deserialize(character.hitDice))
      // MapifyTs.deserialize(character.hitDice).forEach((value: HitDie, key: string) => {
      // });
      // this.character = 
      // const a = new Character();
      // a.name = 'Batata';
      // a.abilities.set('Força', 20);
      // a.skills.get('Destreza')?.set('Acrobacia', 5);
      // a.specializedSkills.get('Inteligência')?.get('Conhecimentos')?.set('Culinária', 4);
      // this.character = a;
      // this.emitUpdate();
      this.character = character
      console.log('Foi!');

  }

  async save() {
    console.log(this.character);
    const data = MapifyTs.serialize(this.character);
    const character = await this.http.post<Character>('http://localhost:10000/character', data).toPromise();
    console.log(character);
  }
}