import { Component } from '@angular/core';
import { Character } from 'src/app/components/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-life-points',
  templateUrl: './life-points.component.html',
  styleUrls: ['./life-points.component.css']
})
export class LifePointsComponent {

  constructor(
    public readonly characterService: CharacterService
  ) { }

  private character!: Character;

  get currentLifePoints(): number {
    return this.character.currentLifePoints;
  }

  set currentLifePoints(currentLifePoints: number) {
    this.character.currentLifePoints = Number(currentLifePoints);
    this.characterService.emitUpdate();
  }

  get maxLifePoints(): number {
    return this.character.maxLifePoints;
  }

  set maxLifePoints(maxLifePoints: number) {
    this.character.maxLifePoints = Number(maxLifePoints);
    this.characterService.emitUpdate();
  }

  maxTemporaryLifePoints: number = 20;
  previousCurrentTemporaryLifePoints: number = 20;

  get currentTemporaryLifePoints(): number {
    return this.character.temporaryLifePoints;
  }

  set currentTemporaryLifePoints(currentTemporaryLifePoints: number) {
    this.character.temporaryLifePoints = Number(currentTemporaryLifePoints);
    this.characterService.emitUpdate();
  }

  ngOnInit(): void {
    this.characterService.character$.subscribe(character => {
      this.character = character;
    });
  }

  onChangeTemporaryLifePoints() {
    if (this.currentTemporaryLifePoints > this.previousCurrentTemporaryLifePoints) {
      this.maxTemporaryLifePoints = this.previousCurrentTemporaryLifePoints = this.currentTemporaryLifePoints;
    }
    this.previousCurrentTemporaryLifePoints = this.currentTemporaryLifePoints;
  }
}
