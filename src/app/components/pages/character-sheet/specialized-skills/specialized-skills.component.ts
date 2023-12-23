import { Component } from '@angular/core';
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

  toArray(keys: IterableIterator<string>): string[] {
    return Array.from(keys);
  }
}
