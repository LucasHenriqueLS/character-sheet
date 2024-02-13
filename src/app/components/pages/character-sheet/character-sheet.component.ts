import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent {

  constructor(
    private route: ActivatedRoute,
    private readonly characterService: CharacterService
  ) { }

  private characterId!: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterId = params['characterId'];
      this.characterService.loadCharacterById(this.characterId);
    });
  }
}
