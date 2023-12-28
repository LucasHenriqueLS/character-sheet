import { Component, Input } from '@angular/core';
import { Weapon } from '../attack-options/attack-options.component';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/components/Character';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css']
})
export class AttackComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() weapon!: Weapon;

  public attackBonus!: number;
  public damageBonus!: number;

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
      this.updateAttackAndDamageBonusModifier();
    });
  }

  updateAttackAndDamageBonusModifier() {
    if (this.weapon.type.includes('Arma Corpo a Corpo')) {
      const strength: number = this.character.abilities.get('Força')!;
      if (this.weapon.properties.includes('Acuidade')) {
        const dexterity: number = this.character.abilities.get('Destreza')!;
        this.damageBonus = calculateAbilityModifier((strength >= dexterity) ? strength : dexterity);
      } else {
        this.damageBonus = calculateAbilityModifier(strength);
      }
      this.attackBonus = this.damageBonus;
      if (this.character.specializedSkills.get('Força')!.get('Armas')!.has(this.weapon.id)) {
        this.attackBonus += this.character.specializedSkills.get('Força')!.get('Armas')!.get(this.weapon.id)!;
      }
    } else {
      this.attackBonus = this.damageBonus = calculateAbilityModifier(this.character.abilities.get('Destreza')!);
      if (this.character.specializedSkills.get('Destreza')!.get('Armas')!.has(this.weapon.id)) {
        this.attackBonus += this.character.specializedSkills.get('Destreza')!.get('Armas')!.get(this.weapon.id)!;
      }
    }
  }
}
