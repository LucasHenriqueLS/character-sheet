export function calculateAbilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function translateSkillFromENToPT(skill: string): string | undefined {
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

export function translateSpcializedSkillFromENToPT(specializedSkill: string): string | undefined {
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