import { Injectable } from '@angular/core';
import { Character } from '../components/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public character: Character = new Character();

  constructor() { }

  save() {
    // Fazer requisição para o back-end.
    console.log(this.character);
  }
}
