import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { MapUtils, TranslateFromTo, calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-specialized-skill',
  templateUrl: './specialized-skill.component.html',
  styleUrls: ['./specialized-skill.component.css']
})
export class SpecializedSkillComponent {

  constructor(
    private characterService: CharacterService
  ) { }

  @Input() groupName!: string;
  @Input() specializedSkill!: string;
  @Input() ability!: string;

  public modifier!: number;

  private privateSpecializedSkill!: string;

  get proficiencyBonus(): number {
    return this.characterService.character[TranslateFromTo.translateSpecializedSkillGroupFromPTToEN(this.groupName)!].get(this.privateSpecializedSkill)!;
  }

  set proficiencyBonus(proficiencyBonus: number) {
    this.characterService.character[TranslateFromTo.translateSpecializedSkillGroupFromPTToEN(this.groupName)!].set(this.specializedSkill, proficiencyBonus);
  }

  ngOnInit() {
    this.privateSpecializedSkill = this.specializedSkill;
    this.updateModifier();
  }

  changeSpecializedSkill(): void {
    this.characterService.character[TranslateFromTo.translateSpecializedSkillGroupFromPTToEN(this.groupName)!] = MapUtils.changeKey(this.characterService.character[TranslateFromTo.translateSpecializedSkillGroupFromPTToEN(this.groupName)!], this.privateSpecializedSkill, this.specializedSkill);
    this.privateSpecializedSkill = this.specializedSkill;
  }

  updateModifier() {
    this.proficiencyBonus = Number(this.proficiencyBonus);
    this.modifier = this.proficiencyBonus + calculateAbilityModifier(this.characterService.character.abilities.get(this.ability)!);
    this.characterService.save();
  }

  removeSpecializedSkill() {
    this.characterService.character[TranslateFromTo.translateSpecializedSkillGroupFromPTToEN(this.groupName)!].delete(this.privateSpecializedSkill);
  }
}
