import { Component } from '@angular/core';
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

  get currentLifePoints(): number {
    return this.characterService.character.currentLifePoints;
  }

  set currentLifePoints(currentLifePoints: number) {
    this.characterService.character.currentLifePoints = Number(currentLifePoints);
  }

  get maxLifePoints(): number {
    return this.characterService.character.maxLifePoints;
  }

  set maxLifePoints(maxLifePoints: number) {
    this.characterService.character.maxLifePoints = Number(maxLifePoints);
  }

  maxTemporaryLifePoints: number = 20;
  previousCurrentTemporaryLifePoints: number = 20;

  get currentTemporaryLifePoints(): number {
    return this.characterService.character.temporaryLifePoints;
  }

  set currentTemporaryLifePoints(currentTemporaryLifePoints: number) {
    this.characterService.character.temporaryLifePoints = Number(currentTemporaryLifePoints);
  }

  onChangeTemporaryLifePoints() {
    if (this.currentTemporaryLifePoints > this.previousCurrentTemporaryLifePoints) {
      this.maxTemporaryLifePoints = this.previousCurrentTemporaryLifePoints = this.currentTemporaryLifePoints;
    }
    this.previousCurrentTemporaryLifePoints = this.currentTemporaryLifePoints;
  }
}
