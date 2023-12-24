import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-specialized-skill',
  templateUrl: './specialized-skill.component.html',
  styleUrls: ['./specialized-skill.component.css']
})
export class SpecializedSkillComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  @Input() specializedSkill!: string;
  @Input() ability!: string;
  @Input() skillOrSpecializedSkillOrSavingThrows!: string;
  modifier: number = 0;

  get proficiencyBonus(): number {
    return this.characterService.character.skills.get(this.specializedSkill)!;
  }

  set proficiencyBonus(proficiencyBonus: number) {
    this.characterService.character.senses.set(this.specializedSkill, proficiencyBonus);
  }

  get updatedSpecializedSkill(): string {
    return this.specializedSkill;
  }

  set updatedSpecializedSkill(specializedSkill: string) {
    this.characterService.character.knowledge.set(specializedSkill, this.characterService.character.knowledge.get(this.specializedSkill)!);
    this.characterService.character.knowledge.delete(this.specializedSkill);
    this.specializedSkill = specializedSkill;
  }

  updateSpecializedSkill(): void {
    console.log(this.characterService.character.knowledge.has(this.specializedSkill));
    console.log(this.specializedSkill);
  }

  update() {
    this.proficiencyBonus = Number(this.proficiencyBonus);
    this.modifier = this.proficiencyBonus + calculateAbilityModifier(this.characterService.character.abilities.get(this.ability)!);
    this.characterService.save();
  }

  translateSpecializedSkillFromENToPT(specializedSkill: string): string {
    return this.translateSpecializedSkillFromENToPT(specializedSkill)!;
  }
}
