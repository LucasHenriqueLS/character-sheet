import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.css']
})
export class SkillGroupComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() ability!: string;

  get skills(): string[] {
    return Array.from(this.character.skills.get(this.ability)!.keys());
  }

  ngOnInit() {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }
}
