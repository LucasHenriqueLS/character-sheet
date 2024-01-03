import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  public inspirations = {
    inspiration1: false,
    inspiration2: false,
    inspiration3: false
  };

  updateInspirations(): void {
    this.characterService.character.inspirations = Object.values(this.inspirations).filter(value => value).length;
    console.log(this.characterService.character.inspirations);
  }
}
