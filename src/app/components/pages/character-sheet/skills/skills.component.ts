import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  get abilities(): string[] {
    return Array.from(this.character.skills.keys());
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
