import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttackOptionsComponent, Weapon } from './attack-options/attack-options.component';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-attacks',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.css']
})
export class AttacksComponent {

  constructor(
    public dialog: MatDialog,
    public characterService: CharacterService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AttackOptionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
