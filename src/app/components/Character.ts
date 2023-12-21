export interface Character {
    id: string;
    name: string;
    abilities: { strength: number, dexterity: number, constitution: number, intelligence: number, wisdom: number, charisma: number }
}