import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttackOptionsComponent, } from './attack-options/attack-options.component';
import { CharacterService } from 'src/app/services/character.service';
import { Weapon } from 'src/app/components/Character';

@Component({
  selector: 'app-attacks',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.css']
})
export class AttacksComponent {

  constructor(
    public characterService: CharacterService,
    public dialog: MatDialog
  ) { }

  get weapons(): Weapon[] {
    return this.characterService.character.weapons;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AttackOptionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
