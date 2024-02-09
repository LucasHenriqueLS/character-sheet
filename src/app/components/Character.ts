export class Character {
  [key: string]: any;
  public id: string = '';
  public name: string = 'Eöl de Raveen-Há';
  public alignment: string = 'LN';
  public race: string = 'Elfo (da Lua)';
  public sex: string = 'Masculino';
  public combatantClass: string = 'Mago - 5° Nível';
  public backgroud: string = 'Sábio (Pesquisador)';
  public experience: number = 14800;
  public description: string = 'Eöl é alto (1,74 metros), magro (60 kg) e aparenta ser jovem (128 anos). Ele possui pele azul pálida, longos cabelos pretos lisos e olhos verdes vibrantes.';
  public inspirations: number = 0;
  public maxLifePoints: number = 200;
  public currentLifePoints: number = 100;
  public temporaryLifePoints: number = 5;
  public hitDice: Map<string, HitDie> = new Map([
    ["d8", { total: 1, remaining: 1 }],
    ["d12", { total: 5, remaining: 2 }]
  ]);
  public deathSaves: DeathSaves = new DeathSaves();
  public proficiencyBonus: ProficiencyBonus = new ProficiencyBonus();
  public abilities: Map<string, number> = new Map([
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
    ])],
  ]);
  public specializedSkills: Map<string, Map<string, Map<string, number>>> = new Map([
    ["Força", new Map([
      ["Armas", new Map([
        ["Lâmina (Muito Pequena)", 0],  // Adagas
        ["Lâmina (Pequena)", 0],        // Espadas Curtas
        ["Lâmina (Média)", 0],          // Espadas Longas
        ["Lâmina (Grande)", 0]          // Espadas Grandes
      ])]
    ])],
    ["Destreza", new Map([
      ["Armas", new Map([
        ["Arco (Grande)", 0],  // Arco Longo
      ])]
    ])],
    ["Inteligência", new Map([
      ["Conhecimentos", new Map([
        ["Arcano", 0],
        ["História", 0],
        ["Natureza", 0],
        ["Religião", 0]
      ])],
      ["Ferramentas", new Map([
        ["Ferramentas de Ferreiro", 0],
        ["Suprimentos de Alquimista", 0],
        ["Kits de Venenos", 0],
        ["Ferramentas de Ladrão", 0]
      ])]
    ])],
    ["Sabedoria", new Map([
      ["Profissões", new Map([
        ["Cervejeito", 0],
        ["Cozinheiro", 0],
        ["Curtidor", 0],
        ["Lenhador", 0]
      ])]
    ])],
    ["Carisma", new Map([
      ["Atuações", new Map([
        ["Dramaturgia", 0],
        ["Dança", 0],
        ["Oratória", 0],
        ["Instrumentos de Corda", 0]
      ])]
    ])]
  ]);
  public senses: Map<string, number> = new Map([
    ["vision", 0],
    ["hearing", 0],
    ["smell", 0]
  ]);
  public weapons: Weapon[] = [];
  public wieldedItems: WieldableItem[] = [
    { item: new Item('', 0, '', '', ''), isWieldedInTheRightHand: false, isWieldedInTheLeftHand: false },
    { item: new Item('', 1, '', '', ''), isWieldedInTheRightHand: false, isWieldedInTheLeftHand: false },
    { item: new Weapon('Lâmina (Muito Pequena)', 2, 'Adaga', 'Uma mão', '', 'Arma Corpo a Corpo ou à Distância', '1,5 m ou 6/18 m', 'um alvo', '1d4', 'perfurante', ['Acuidade','Leve','Arremesso (alcance 6/18)']), isWieldedInTheRightHand: false, isWieldedInTheLeftHand: false },
    { item: new Weapon('Lâmina (Média)', 3, 'Espada Longa', 'Uma mão ou Duas mãos', '', 'Arma Corpo a Corpo', '1,5 m', 'um alvo', '1d8 ou 1d10', 'cortante', []), isWieldedInTheRightHand: false, isWieldedInTheLeftHand: false },
    { item: new Weapon('Arco (Grande)', 4, 'Arco Longo', 'Duas mãos', '', 'Arma à Distância', '45/180 m', 'um alvo', '1d8', 'perfurante', ['Munição']), isWieldedInTheRightHand: false, isWieldedInTheLeftHand: false },
    { item: new Shield ('Escudo Médio (mediano)', 5, 'Escudo', 'Uma mão', '', 'Arma Corpo a Corpo',  '1,5 m', 'um alvo', '1d4', 'contuntende', [], 2), isWieldedInTheRightHand: false, isWieldedInTheLeftHand: false }
  ];
  // public armor: Armor;
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
  public spellsByLevel: Map<number, SpellByLevel> = new Map([
    [1, {
          totalSlots: 4,
          currentSlots: 2,
          spells: new Map([
                    ['Mísseis Mágicos', { name: 'Mísseis Mágicos', level: 1, isPrepared: true }],
                    ['Mãos Flamejantes', { name: 'Mãos Flamejantes', level: 1, isPrepared: true }],
                    ['Sono', { name: 'Sono', level: 1, isPrepared: false }],
                    ['Armadura Arcana', { name: 'Armadura Arcana', level: 1, isPrepared: false }],
                  ])
        }
    ]
  ])
}

export class SpellByLevel {
  public totalSlots: number = 0;
  public currentSlots: number = 0;
  public spells: Map<string, Spell> = new Map();
}

export class Spell {
  public name: string = '';
  public level: number = 0;
  public isPrepared: boolean = false;
}

export class Inventory {
  public clothing: Clothing = new Clothing();
  public sheaths: Sheaths[] = [];
}

export class Sheaths {

}

export class Clothing {
  public armorClass: number = 0;
  public limiteDexterityModifier: number = 0;
}

export class Armor extends Clothing { // Tem que melhorar
  
  public isUseShield: string = 'pequeno, médio ou grande';
}

export class WieldableItem {
  public item!: Weapon | Shield | Item;
  public isWieldedInTheRightHand: boolean = false;
  public isWieldedInTheLeftHand: boolean = false;
}

export class Item {
  public id: string = '';
  public position: number = 0;
  public name: string = '';
  public hands: string = '';
  public description: string = '';

  constructor(id: string, position: number, name: string, hands: string, description: string) {
    this.id = id;
    this.position = position;
    this.name = name;
    this.hands = hands;
    this.description = description;
  }
}

export class Weapon extends Item {
  public type: string = '';
  public range: string = '';
  public targets: string = '';
  public damageDie: string = '';
  public damateType: string = '';
  public properties: string[] = [];

  constructor(id: string, position: number, name: string, hands: string, description: string, type: string, range: string, targets: string, damageDie: string, damateType: string, properties: string[]) {
    super(id, position, name, hands, description);
    this.type = type;
    this.range = range;
    this.targets = targets;
    this.damageDie = damageDie;
    this.damateType = damateType;
    this.properties = properties;
  }
}

export class Shield extends Weapon {
  public coverageBonus: number = 0;

  constructor(id: string, position: number, name: string, hands: string, description: string, type: string, range: string, targets: string, damageDie: string, damateType: string, properties: string[], coverageBonus: number) {
    super(id, position, name, hands, description, type, range, targets, damageDie, damateType, properties);
    this.coverageBonus = coverageBonus;
  }
}