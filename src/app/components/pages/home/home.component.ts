import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  ngOnInit() {
    this.characterService.loadCharacterByName("Eöl de Raveen-Há");
  }
}
