import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { CharacterService } from 'src/app/services/character.service';
import { Weapon } from 'src/app/components/Character';

const WEAPON_DATA: Weapon[] = [
  {
    classification: 'Lâmina (Muito Pequena)',
    position: 1,
    name: 'Adaga',
    type: 'Arma Corpo a Corpo ou à Distância',
    hands: 'Uma mão',
    range: '1,5 m ou 6/18 m',
    targets: 'um alvo',
    damageDie: '1d4',
    damateType: 'perfurante',
    properties: ['Acuidade','Leve','Arremesso (alcance 6/18)'],
    description: ''
  },
  {
    classification: 'Lâmina (Média)',
    position: 2,
    name: 'Espada Longa',
    type: 'Arma Corpo a Corpo',
    hands: 'Uma mão ou Duas mãos',
    range: '1,5 m',
    targets: 'um alvo',
    damageDie: '1d8 ou 1d10',
    damateType: 'cortante',
    properties: [],
    description: ''
  },
  {
    classification: 'Arco (Grande)',
    position: 3,
    name: 'Arco Longo',
    type: 'Arma à Distância',
    hands: 'Duas mãos',
    range: '45/180 m',
    targets: 'um alvo',
    damageDie: '1d8',
    damateType: 'perfurante',
    properties: ['Munição'],
    description: ''
  }
];

@Component({
  selector: 'app-attack-options',
  templateUrl: './attack-options.component.html',
  styleUrls: ['./attack-options.component.css']
})
export class AttackOptionsComponent {

  constructor(
    public characterService: CharacterService
  ) {}

  displayedColumns: string[] = ['select', 'name', 'type', 'range', 'damage'];
  dataSource = new MatTableDataSource<Weapon>(WEAPON_DATA);
  selection = new SelectionModel<Weapon>(true, []);

  ngOnInit() {
    this.selection.select(...this.characterService.character.weapons);
  }

  //** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Weapon): string {
    this.characterService.character.weapons = this.selection.selected;
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
