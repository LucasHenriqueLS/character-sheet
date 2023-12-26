import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.css']
})
export class SkillGroupComponent {

  @Input() groupName!: string;
  @Input() skills!: string[];
  @Input() ability!: string;
  @Input() skillOrOrSavingThrow!: string;
}
