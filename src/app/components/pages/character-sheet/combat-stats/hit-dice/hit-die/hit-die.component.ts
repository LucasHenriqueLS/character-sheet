import { Component, Input } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';
import { MapUtil } from 'src/app/util/util';

@Component({
  selector: 'app-hit-die',
  templateUrl: './hit-die.component.html',
  styleUrls: ['./hit-die.component.css']
})
export class HitDieComponent {

  constructor(
    private readonly characterService: CharacterService
  ) { }

  private character!: Character;

  @Input() hitDie!: string;

  private privateHitDie!: string;

  get total(): number {
    return this.character.hitDice.get(this.privateHitDie)!.total;
  }

  set total(total: number) {
    this.character.hitDice.get(this.privateHitDie)!.total = Number(total);
    this.characterService.emitUpdate();
  }

  get remaining(): number {
    return this.character.hitDice.get(this.privateHitDie)!.remaining;
  }

  set remaining(remaining: number) {
    this.character.hitDice.get(this.privateHitDie)!.remaining = Number(remaining);
    this.characterService.emitUpdate();
  }

  ngOnInit() {
    this.privateHitDie = this.hitDie;
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }

  changeHitDie(): void {
    if (this.character.hitDice.has(this.hitDie)) {
      this.removeHitDie();
    } else {
      this.character.hitDice = MapUtil.changeKey(this.character.hitDice, this.privateHitDie, this.hitDie);
      this.characterService.emitUpdate();
      this.privateHitDie = this.hitDie;
    }
  }

  removeHitDie() {
    this.character.hitDice.delete(this.privateHitDie);
    this.characterService.emitUpdate();
  }
}
