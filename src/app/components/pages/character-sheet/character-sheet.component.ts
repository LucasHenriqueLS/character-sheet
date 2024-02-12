import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import MapifyTs from 'mapify-ts';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }
}
