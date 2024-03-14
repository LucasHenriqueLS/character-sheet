import { Injectable } from '@angular/core';
import { Character, HitDie, Item, Shield, SpellByLevel, Weapon, WieldableItem } from '../components/Character';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import MapifyTs from 'mapify-ts';
import { CharacterNameDto } from '../dtos/CharacterNameDto';

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
    this.characterSource.next(this.character);
    this.update();
  }

  getAllCharacterIdsAndNames(): Observable<CharacterNameDto[]> {
    return this.http.get<CharacterNameDto[]>('http://192.168.3.27:10000/character/get-all-character-names');
  }

  async loadCharacterById(id: string): Promise<void> {
    const response = await this.http.get<any>(`http://192.168.3.27:10000/character/get-by-id/${id}`).toPromise();

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
      character.speed = data.speed;
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
      character.wieldedItems = data.wieldedItems.map((wieldedItem: any) => {
        let item: Weapon | Shield | Item;
        if (wieldedItem.item.coverageBonus) {
          item = new Shield(wieldedItem.item.classification, wieldedItem.item.name, wieldedItem.item.hands, wieldedItem.item.description, wieldedItem.item.type, wieldedItem.item.range, wieldedItem.item.targets, wieldedItem.item.damageDie, wieldedItem.item.damageType, wieldedItem.item.properties, wieldedItem.item.coverageBonus, wieldedItem.item.armorPenalty);
        } else if (wieldedItem.item.damageDie) {
          item = new Weapon(wieldedItem.item.classification, wieldedItem.item.name, wieldedItem.item.hands, wieldedItem.item.description, wieldedItem.item.type, wieldedItem.item.range, wieldedItem.item.targets, wieldedItem.item.damageDie, wieldedItem.item.damageType, wieldedItem.item.properties);
        } else if (wieldedItem.item.name) {
          item = new Item(wieldedItem.item.classification, wieldedItem.item.name, wieldedItem.item.hands, wieldedItem.item.description);
        }
        return new WieldableItem(item!, wieldedItem.id, wieldedItem.isWieldedInTheRightHand, wieldedItem.isWieldedInTheLeftHand);
      });
      character.armor = data.armor;
      character.characteristics = data.characteristics;
      character.spellcasting = data.spellcasting;
      character.spellcasting.spellsByLevel = new Map();
      for (const key in response.spellcasting.spellsByLevel) {
        character.spellcasting.spellsByLevel.set(+key, response.spellcasting.spellsByLevel[key] as SpellByLevel);
      }

      this.character = character;
  }
  
  async save(newCharacter: Character) {
    const data = MapifyTs.serialize(newCharacter);
    const character = await this.http.post<Character>('http://192.168.3.27:10000/character', data).toPromise();
    console.log(character);
  }
  
  async update() {
    const data = MapifyTs.serialize(this.character);
    const character = await this.http.post<Character>('http://192.168.3.27:10000/character', data).toPromise();
    console.log(character);
  }
}