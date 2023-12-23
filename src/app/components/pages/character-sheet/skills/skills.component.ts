import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  @Input() character!: Character;
}
