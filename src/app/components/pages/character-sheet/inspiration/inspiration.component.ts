import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent {

  constructor(
    public characterService: CharacterService
  ) { }

  get inspiration1(): boolean {
    return this.characterService.character.inspirations > 0 ? true : false;
  }

  set inspiration1(inspiration1: boolean) {
    this.characterService.character.inspirations += inspiration1 ? 1 : -1;
  }

  get inspiration2(): boolean {
    return this.characterService.character.inspirations > 1 ? true : false;
  }

  set inspiration2(inspiration2: boolean) {
    this.characterService.character.inspirations += inspiration2 ? 1 : -1;
  }

  get inspiration3(): boolean {
    return this.characterService.character.inspirations > 2 ? true : false;
  }

  set inspiration3(inspiration3: boolean) {
    this.characterService.character.inspirations += inspiration3 ? 1 : -1;
  }
}
