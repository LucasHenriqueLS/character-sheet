import { Component, Input } from '@angular/core';
import { Weapon } from '../attack-options/attack-options.component';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css']
})
export class AttackComponent {

  @Input() weapon!: Weapon;
}
