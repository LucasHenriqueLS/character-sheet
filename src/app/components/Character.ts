import { Weapon } from "./pages/character-sheet/attacks/attack-options/attack-options.component";

export class Character {
  public id: string = '';
  public name: string = '';
  public abilities: Map<string, number> = new Map([
    ["strength", 0],
    ["dexterity", 0],
    ["constitution", 0],
    ["intelligence", 0],
    ["wisdom", 0],
    ["charisma", 0],
  ]);
  public skills: Map<string, number> = new Map([
    ["athletics", 0],
    ["acrobatics", 0],
    ["sleightOfHand", 0],
    ["stealth", 0],
    ["reasoning", 0],
    ["insight", 0],
    ["survival", 0],
    ["eloquence", 0],
    ["deception", 0],
    ["intimidation", 0],
  ]);
  public weapons: Weapon[] = [];
  public characteristics: Characteristic[] = [
    {
      name: 'Ancestralidade Feérica',
      source: 'Raça',
      sourceType: 'por ser meio-elfo',
      description: 'Nenhum tipo de magia pode colocá-lo para dormir, e você tem vantagem em salvaguardas contra ser enfeitiçado.'
    },
    {
      name: 'Visão no Escuro',
      source: 'Raça',
      sourceType: 'por ser meio-elfo',
      description: 'Graças ao seu sangue élfico, você possui uma visão superior no escuro. Você consegue enxergar até 18 metros na meia-luz como se fosse dia e, na escuridão, como se fosse meia-luz. Na escuridão você só consegue discernir tons de cinza.'
    }
  ];
}

export class Characteristic {
  public name: string = '';
  public source: string = '';
  public sourceType: string = '';
  public description: string = '';
}