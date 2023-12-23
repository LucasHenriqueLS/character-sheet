import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-senses',
  templateUrl: './senses.component.html',
  styleUrls: ['./senses.component.css']
})
export class SensesComponent {

  constructor(
    public characterService: CharacterService
  ) {}
}
