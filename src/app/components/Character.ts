import { Weapon } from "./pages/character-sheet/attacks/attack-options/attack-options.component";

export class Character {
  [key: string]: any;
  public id: string = '';
  public name: string = '';
  public maxLifePoints: number = 200;
  public currentLifePoints: number = 100;
  public temporaryLifePoints: number = 5;
  public abilities: Map<string, number> = new Map([
    ["strength", 0],
    ["dexterity", 0],
    ["constitution", 0],
    ["intelligence", 0],
    ["wisdom", 0],
    ["charisma", 0]
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
    ["intimidation", 0]
  ]);
  public knowledge: Map<string, number> = new Map([
    ["arcana", 0],
    ["history", 0],
    ["nature", 0],
    ["religion", 0]
  ]);
  public tools: Map<string, number> = new Map([
    ["smith's tools", 0],
    ["alchemist's supplies", 0],
    ["poisoner's kits", 0],
    ["thieves' tools", 0]
  ]);
  public professions: Map<string, number> = new Map([
    ["brewer", 0],
    ["chef", 0],
    ["tanner", 0],
    ["lumberjack", 0]
  ]);
  public performances: Map<string, number> = new Map([
    ["dramaturgy", 0],
    ["dance", 0],
    ["oratory", 0],
    ["string instruments", 0]
  ]);
  public senses: Map<string, number> = new Map([
    ["vision", 0],
    ["hearing", 0],
    ["smell", 0]
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