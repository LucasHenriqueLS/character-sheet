import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  get inspiration1(): boolean {
    return this.character.inspirations > 0 ? true : false;
  }

  set inspiration1(inspiration1: boolean) {
    this.character.inspirations += inspiration1 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  get inspiration2(): boolean {
    return this.character.inspirations > 1 ? true : false;
  }

  set inspiration2(inspiration2: boolean) {
    this.character.inspirations += inspiration2 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  get inspiration3(): boolean {
    return this.character.inspirations > 2 ? true : false;
  }

  set inspiration3(inspiration3: boolean) {
    this.character.inspirations += inspiration3 ? 1 : -1;
    this.characterService.emitUpdate();
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
