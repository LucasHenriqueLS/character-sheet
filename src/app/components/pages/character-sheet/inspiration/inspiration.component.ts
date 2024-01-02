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

  public inspiration_1: boolean = false;
  public inspiration_2: boolean = false;
  public inspiration_3: boolean = false;

  updateInspirations(): void {

    if (
      this.inspiration_1 &&
      this.inspiration_2 &&
      this.inspiration_3
      ) {
        this.characterService.character.inspirations = 3;
    } else if (
      this.inspiration_1 && this.inspiration_2 ||
      this.inspiration_2 && this.inspiration_3 ||
      this.inspiration_1 && this.inspiration_3
      ) {
        this.characterService.character.inspirations = 2;
      } else if (
        this.inspiration_1 ||
        this.inspiration_2 ||
        this.inspiration_3
      ) {
        this.characterService.character.inspirations = 1;
    } else {
      this.characterService.character.inspirations = 0;
    }
  }
}
