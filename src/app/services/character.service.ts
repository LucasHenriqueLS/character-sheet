import { Injectable } from '@angular/core';
import { Character } from '../components/Character';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  constructor() { }

  private characterSource = new BehaviorSubject<Character>(new Character());
  public character$ = this.characterSource.asObservable();

  get character(): Character {
    return this.characterSource.getValue();
  }

  set character(character: Character) {
    this.characterSource. next(character);
  }

  emitUpdate() {
    this.characterSource.next(this.characterSource.getValue());
    this.save();
  }

  save() {
    // Fazer requisição para o back-end.
    console.log(this.character);
  }
}
