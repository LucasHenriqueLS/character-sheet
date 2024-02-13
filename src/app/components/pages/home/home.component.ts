import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterNameDto } from 'src/app/dtos/CharacterNameDto';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../Character';
import { generateUUID } from 'src/app/util/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private readonly characterService: CharacterService
  ) { }

  public characterNames!: CharacterNameDto[];

  ngOnInit() {
    this.characterService.getAllCharacterIdsAndNames().subscribe(
      (data) => {
        this.characterNames = data;
        console.log(this.characterNames);
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }

  toCharacterSheet(characterId: string): void {
    this.router.navigate(['/character-sheet', characterId]);
  }

  createNewCharacter(): void {
    const newCharacter: Character = new Character();
    newCharacter.id = generateUUID();
    this.characterService.save(newCharacter)
    this.router.navigate(['/character-sheet', newCharacter.id]);
  }
}
