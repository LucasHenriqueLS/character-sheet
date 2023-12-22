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
  public weapons: Weapon[] = []
}