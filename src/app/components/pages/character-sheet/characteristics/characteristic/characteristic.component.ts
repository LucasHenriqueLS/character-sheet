import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.css']
})
export class CharacteristicComponent {

  @Input() characteristicName!: string;
  @Input() characteristicSource!: string;
  @Input() characteristicDescription!: string;

  update() {
    console.log(this.characteristicName);
    console.log(this.characteristicSource);
    console.log(this.characteristicDescription);
  }
}
