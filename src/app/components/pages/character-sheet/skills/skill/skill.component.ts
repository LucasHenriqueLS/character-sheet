import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { calculateAbilityModifier } from 'src/app/util/util';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  
  constructor(
    private characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() skill!: string;
  @Input() ability!: string;
  @Input() skillOrOrSavingThrow!: string;

  public modifier: number = 0;

  get proficiencyBonus(): number {
    return this.character.skills.get(this.ability)!.get(this.skill)!;
  }

  set proficiencyBonus(proficiencyBonus: number) {
    this.character.skills.get(this.ability)!.set(this.skill, Number(proficiencyBonus));
    this.characterService.emitUpdate();
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
      this.updateSkillModifier();
    });
  }

  updateSkillModifier() {
    this.modifier = this.proficiencyBonus + calculateAbilityModifier(this.character.abilities.get(this.ability)!);
  }
}
