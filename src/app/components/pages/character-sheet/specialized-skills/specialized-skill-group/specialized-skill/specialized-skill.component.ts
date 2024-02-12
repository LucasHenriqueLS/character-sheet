import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { MapUtil, calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-specialized-skill',
  templateUrl: './specialized-skill.component.html',
  styleUrls: ['./specialized-skill.component.css']
})
export class SpecializedSkillComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() ability!: string;
  @Input() groupName!: string;
  @Input() specializedSkill!: string;

  public modifier!: number;

  private privateSpecializedSkill!: string;

  get proficiencyBonus(): number {
    return this.character.specializedSkills.get(this.ability)!.get(this.groupName)!.get(this.privateSpecializedSkill)!;
  }

  set proficiencyBonus(proficiencyBonus: number) {
    this.character.specializedSkills.get(this.ability)!.get(this.groupName)!.set(this.specializedSkill, Number(proficiencyBonus));
    this.characterService.emitUpdate();
  }

  ngOnInit() {
    this.privateSpecializedSkill = this.specializedSkill;
    this.characterService.character$.subscribe(character => {
      this.character = character;
      this.updateSpecializedSkillModifier();
    });
  }

  changeSpecializedSkill(): void {
    this.character.specializedSkills.get(this.ability)!.set(this.groupName, MapUtil.changeKey(this.character.specializedSkills.get(this.ability)!.get(this.groupName)!, this.privateSpecializedSkill, this.specializedSkill));
    this.characterService.emitUpdate();
    this.privateSpecializedSkill = this.specializedSkill;
  }

  private updateSpecializedSkillModifier() {
    this.modifier = this.proficiencyBonus + calculateAbilityModifier(this.character.abilities.get(this.ability)!);
  }

  removeSpecializedSkill() {
    this.character.specializedSkills.get(this.ability)!.get(this.groupName)!.delete(this.privateSpecializedSkill);
    this.characterService.emitUpdate();
  }
}
