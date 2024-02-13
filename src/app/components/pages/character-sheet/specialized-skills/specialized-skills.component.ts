import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-specialized-skills',
  templateUrl: './specialized-skills.component.html',
  styleUrls: ['./specialized-skills.component.css']
})
export class SpecializedSkillsComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  public ability!: string;

  get abilities(): string[] {
    return Array.from(this.character.specializedSkills.keys());
  }

  public getGroupNames(ability: string): string[] {
    return Array.from(this.character.specializedSkills.get(ability)!.keys());
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
