import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  constructor(private characterService: CharacterService) { }

  proficiencyBonus: number = 0;
  @Input() skill!: string;
  @Input() modifier: number = 0;

  skillMap: Map<string, string> = new Map([
    ["Atletismo", "athletics"],
    ["Acrobacia", "acrobatics"],
    ["Habilidade Manual", "sleightOfHand"],
    ["Furtividade", "stealth"],
    ["Raciocínio", "reasoning"],
    ["Intuição", "insight"],
    ["Sobrevivência", "survival"],
    ["Eloquência", "eloquence"],
    ["Enganação", "deception"],
    ["Intimidação", "intimidation"],
  ]);

  update() {
    this.proficiencyBonus = Number(this.proficiencyBonus);
    this.modifier = this.proficiencyBonus + calculateAbilityModifier(this.getAbilityBySkill(this.skill));
    this.characterService.character.skills.set(this.skillMap.get(this.skill)!, this.proficiencyBonus);

    this.characterService.save();

    // this.proficiencyBonus = '+' + this.proficiencyBonus;
  }

  private getAbilityBySkill(skill: string): number {
    const abilities = this.characterService.character.abilities;
    let ability: number = 0;
    if (['Atletismo'].includes(skill)) {
      ability = abilities.get('strength')!;
    } else if (['Acrobacia', 'Habilidade Manual', 'Furtividade'].includes(skill)) {
      ability = abilities.get('dexterity')!;
    } else if (['Raciocínio'].includes(skill)) {
      ability = abilities.get('intelligence')!;
    } else if (['Intuição', 'Sobrevivência'].includes(skill)) {
      ability = abilities.get('wisdom')!;
    } else if (['Eloquência', 'Enganação', 'Intimidação'].includes(skill)) {
      ability = abilities.get('charisma')!;
    }
    return ability;
  }
}
