import { v4 as uuidv4 } from 'uuid';

export function generateUUID(): string {
  return uuidv4();
}

export function calculateAbilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export class TranslateFromTo {

  public static translateAbilityFromENToPT(ability: string): string | undefined {
    switch (ability) {
      case "strength":
        return "Força";
      case "dexterity":
        return "Destreza";
      case "constitution":
        return "Constituição";
      case "intelligence":
        return "Inteligência";
      case "wisdom":
        return "Sabedoria";
      case "charisma":
        return "Carisma";
    }
    return undefined;
  }

  public static translateSkillFromENToPT(skill: string): string | undefined {
    switch (skill) {
      case "athletics":
        return "Atletismo";
      case "acrobatics":
        return "Acrobacia";
      case "sleightOfHand":
        return "Habilidade Manual";
      case "stealth":
        return "Furtividade";
      case "reasoning":
        return "Raciocínio";
      case "insight":
        return "Intuição";
      case "survival":
        return "Sobrevivência";
      case "eloquence":
        return "Eloquência";
      case "deception":
        return "Enganação";
      case "intimidation":
        return "Intimidação";
    }
    return undefined;
  }

  public static translateSpecializedSkillFromENToPT(specializedSkill: string): string | undefined {
    switch (specializedSkill) {
      case "arcana":
        return "Arcano";
      case "history":
        return "História";
      case "nature":
        return "Natureza";
      case "religion":
        return "Religião";
  
      case "smith's tools":
        return "Ferramentas de Ferreiro";
      case "alchemist's supplies":
        return "Suprimentos de Alquimista";
      case "poisoner's kits":
        return "Kits de Veneno";
      case "thieves' tools":
        return "Ferramentas de Ladrão";
  
      case "brewer":
        return "Cervejeiro";
      case "chef":
        return "Cozinheiro";
      case "tanner":
        return "Curtidor";
      case "lumberjack":
        return "Lenhador";
  
      case "dramaturgy":
        return "Dramaturgia";
      case "dance":
        return "Dança";
      case "oratory":
        return "Oratória";
      case "string instruments":
        return "Instrumentos de corda";
    }
    return undefined;
  }

  public static translateSpecializedSkillGroupFromPTToEN(skill: string): string | undefined {
    switch (skill) {
      case "Conhecimentos":
        return "knowledge";
      case "Ferramentas":
        return "tools";
      case "Profissões":
        return "professions";
      case "Atuações":
        return "performances";
    }
    return undefined;
  }
}

export class MapUtil {

  public static changeKey<K, V>(map: Map<K, V>, oldKey: K, newKey: K): Map<K, V> {
    if (!map.has(oldKey))
      throw new Error('Chave antiga não encontrada no Map.');
    if (map.has(newKey))
      throw new Error('A chave nova já existe no Map.');

    const newMap = new Map<K, V>();
    for (const [key, value] of map) {
      if (key === oldKey) {
        newMap.set(newKey, value);
      } else {
        newMap.set(key, value);
      }
    }
    return newMap;
  }

  public static deserialize(obj: any): Map<any, any> {
    const map = new Map<any, any>();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        map.set(key, obj[key]);
      }
    }
    return map;
  }
}