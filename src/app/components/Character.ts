import { Weapon } from "./pages/character-sheet/attacks/attack-options/attack-options.component";

export class Character {
  [key: string]: any;
  public id: string = '';
  public name: string = '';
  public inspirations: number = 0;
  public maxLifePoints: number = 200;
  public currentLifePoints: number = 100;
  public temporaryLifePoints: number = 5;
  public hitDice: Map<string, HitDie> = new Map([
    ["d8", { total: 1, remaining: 1 }],
    ["d12", { total: 5, remaining: 2 }]
  ]);
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
}

export class Characteristic {
  public name: string = '';
  public source: string = '';
  public sourceType: string = '';
  public description: string = '';
}

export class Armor { // Tem que melhorar
  public armorClass: number = 0;
  public limiteDexterityModifier: number | undefined = 0;
  public isUseShield: string = 'pequeno, médio ou grande';
}

export class HitDie {
  public total: number = 0;
  public remaining: number = 0;
}

export class ProficiencyBonus {
  public total: number = 0;
  public current: number = 0;
}

export class Spellcasting {
  public spellcastingAbility: string = '';
  public spellSaveDC: number = 0;
  public spellAttackBonus: number = 0;
  public spellsByLevel: Map<number, SpellPerLevel> = new Map([
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

export class SpellPerLevel {
  public totalSlots: number = 0;
  public currentSlots: number = 0;
  public spells: Map<string, Spell> = new Map();
}

export class Spell {
  public name: string = '';
  public level: number = 0;
  public isPrepared: boolean = false;
}