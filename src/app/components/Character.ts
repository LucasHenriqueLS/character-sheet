export class Character {
  [key: string]: any;
  public id: string = '';
  public name: string = '';
  public alignment: string = '';
  public race: string = '';
  public sex: string = '';
  public combatantClass: string = '';
  public backgroud: string = '';
  public experience: number = 0;
  public description: string = '';
  public inspirations: number = 0;
  public maxLifePoints: number = 0;
  public currentLifePoints: number = 0;
  public temporaryLifePoints: number = 0;
  public hitDice: Map<string, HitDie> = new Map();
  public deathSaves: DeathSaves = new DeathSaves();
  public speed: number = 0;
  public proficiencyBonus: ProficiencyBonus = new ProficiencyBonus();
  public abilities: Map<string, number> = new Map([
    ["Força", 0],
    ["Destreza", 0],
    ["Constituição", 0],
    ["Inteligência", 0],
    ["Sabedoria", 0],
    ["Carisma", 0]
  ]);
  public savingThrows: Map<string, number> = new Map([
    ["Força", 0],
    ["Destreza", 0],
    ["Constituição", 0],
    ["Inteligência", 0],
    ["Sabedoria", 0],
    ["Carisma", 0]
  ]);
  public skills: Map<string, Map<string, number>> = new Map([
    ["Força", new Map([
      ["Atletismo", 0]
    ])],
    ["Destreza", new Map([
      ["Acrobacia", 0],
      ["Habilidade Manual", 0],
      ["Furtividade", 0]
    ])],
    ["Inteligência", new Map([
      ["Raciocínio", 0]
    ])],
    ["Sabedoria", new Map([
      ["Intuição", 0],
      ["Sobrevivência", 0]
    ])],
    ["Carisma", new Map([
      ["Eloquência", 0],
      ["Enganação", 0],
      ["Intimidação", 0]
    ])]
  ]);
  public specializedSkills: Map<string, Map<string, Map<string, number>>> = new Map([
    ["Força", new Map([
      ["Armas", new Map()]
    ])],
    ["Destreza", new Map([
      ["Armas", new Map()]
    ])],
    ["Inteligência", new Map([
      ["Conhecimentos", new Map()],
      ["Ferramentas", new Map()]
    ])],
    ["Sabedoria", new Map([
      ["Profissões", new Map()]
    ])],
    ["Carisma", new Map([
      ["Atuações", new Map()]
    ])]
  ]);
  public senses: Map<string, number> = new Map([
    ["vision", 0],
    ["hearing", 0],
    ["smell", 0]
  ]);
  public weapons: Weapon[] = [];
  public wieldedItems: WieldableItem[] = [];
  public armor: Armor = new Armor('Sem armadura', 0, 0, 0, Infinity);
  public characteristics: Characteristic[] = [];
  public spellcasting: Spellcasting = new Spellcasting();
  public inventory: Inventory = new Inventory();
}

export class Characteristic {
  public name: string = '';
  public source: string = '';
  public sourceType: string = '';
  public description: string = '';
}

export class HitDie {
  public total: number = 0;
  public remaining: number = 0;
}

export class DeathSaves {
  public successes: number = 0;
  public failures: number = 0;
}

export class ProficiencyBonus {
  public total: number = 0;
  public current: number = 0;
}

export class Spellcasting {
  public spellcastingAbility: string = '';
  public spellSaveDC: number = 0;
  public spellAttackBonus: number = 0;
  public spellsByLevel: Map<number, SpellByLevel> = new Map()
}

export class SpellByLevel {
  public totalSlots: number = 0;
  public currentSlots: number = 0;
  public spells: Spell[] = [];
}

export class Spell {
  public name: string = '';
  public level: number = 0;
  public isPrepared: boolean = false;
}

export class Inventory {
  // public clothing: Clothing = new Clothing();
  public sheaths: Sheaths[] = [];
}

export class Sheaths {

}

export class Clothing {
  public name: string = '';
  public fit: number = 0;

  constructor(name: string, fit: number) {
    this.name = name;
    this.fit = fit;
  }
}

export class Armor extends Clothing {
  public armorBonus: number = 0;
  public armorPenalty: number = 0;
  public limiteDexterityModifier: number = 0;

  constructor(name: string = '', fit: number = 0, armorBonus: number = 0, armorPenalty: number = 0, limiteDexterityModifier: number = 0) {
    super(name, fit);
    this.armorBonus = armorBonus;
    this.armorPenalty = armorPenalty;
    this.limiteDexterityModifier = limiteDexterityModifier;
  }
}

export class WieldableItem {
  public item: Weapon | Shield | Item;
  public id: string;
  public isWieldedInTheRightHand: boolean;
  public isWieldedInTheLeftHand: boolean;

  constructor(item: Weapon | Shield | Item, id: string = '', isWieldedInTheRightHand: boolean = false, isWieldedInTheLeftHand: boolean = false) {
    this.item = item;
    this.id = id;
    this.isWieldedInTheRightHand = isWieldedInTheRightHand;
    this.isWieldedInTheLeftHand = isWieldedInTheLeftHand;
  }
}

export class Item {
  public classification: string;
  public name: string;
  public hands: string;
  public description: string;

  constructor(classification: string = '', name: string = '', hands: string = '', description: string = '') {
    this.classification = classification;
    this.name = name;
    this.hands = hands;
    this.description = description;
  }
}

export class Weapon extends Item {
  public type: string;
  public range: string;
  public targets: string;
  public damageDie: string;
  public damageType: string;
  public properties: string[];

  constructor(classification: string = '', name: string = '', hands: string = '', description: string = '', type: string = '', range: string = '', targets: string = '', damageDie: string = '', damageType: string = '', properties: string[] = []) {
    super(classification, name, hands, description);
    this.type = type;
    this.range = range;
    this.targets = targets;
    this.damageDie = damageDie;
    this.damageType = damageType;
    this.properties = properties;
  }
}

export class Shield extends Weapon {
  public coverageBonus: number;
  public armorPenalty: number;

  constructor(classification: string  = '', name: string  = '', hands: string  = '', description: string  = '', type: string  = '', range: string  = '', targets: string  = '', damageDie: string  = '', damageType: string  = '', properties: string[] = [], coverageBonus: number = 0, armorPenalty: number = 0) {
    super(classification, name, hands, description, type, range, targets, damageDie, damageType, properties);
    this.coverageBonus = coverageBonus;
    this.armorPenalty = armorPenalty;
  }
}