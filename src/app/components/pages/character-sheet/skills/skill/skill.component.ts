import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier, translateSkillFromENToPT } from 'src/app/util/util';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  @Input() skill!: string;
  @Input() ability!: string;
  @Input() skillOrSpecializedSkillOrSavingThrows!: string;
  modifier: number = 0;

  // skillMap: Map<string, string> = new Map([
  //   ["Atletismo", "athletics"],
  //   ["Acrobacia", "acrobatics"],
  //   ["Habilidade Manual", "sleightOfHand"],
  //   ["Furtividade", "stealth"],
  //   ["Raciocínio", "reasoning"],
  //   ["Intuição", "insight"],
  //   ["Sobrevivência", "survival"],
  //   ["Eloquência", "eloquence"],
  //   ["Enganação", "deception"],
  //   ["Intimidação", "intimidation"],
  // ]);

  get proficiencyBonus(): number {
    return this.characterService.character.skills.get(this.skill)!;
  }

  set proficiencyBonus(proficiencyBonus: number) {
    this.characterService.character.senses.set(this.skill, proficiencyBonus);
  }

  update() {
    this.proficiencyBonus = Number(this.proficiencyBonus);
    this.modifier = this.proficiencyBonus + calculateAbilityModifier(this.characterService.character.abilities.get(this.ability)!);
    this.characterService.save();
  }

  translateSkillFromENToPT(skill: string): string {
    return translateSkillFromENToPT(skill)!;
  }

  // private getAbilityBySkill(skill: string): number {
  //   const abilities = this.characterService.character.abilities;
  //   let ability: number = 0;
  //   if (['Atletismo'].includes(skill)) {
  //     ability = abilities.get('strength')!;
  //   } else if (['Acrobacia', 'Habilidade Manual', 'Furtividade'].includes(skill)) {
  //     ability = abilities.get('dexterity')!;
  //   } else if (['Raciocínio'].includes(skill)) {
  //     ability = abilities.get('intelligence')!;
  //   } else if (['Intuição', 'Sobrevivência'].includes(skill)) {
  //     ability = abilities.get('wisdom')!;
  //   } else if (['Eloquência', 'Enganação', 'Intimidação'].includes(skill)) {
  //     ability = abilities.get('charisma')!;
  //   }
  //   return ability;
  // }
}
