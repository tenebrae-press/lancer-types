export type Skills = ISkillData[];

export type SkillDetailTypes = "str" | "con" | "dex" | "int" | "cha";
export const SKILL_DETAILS: Array<SkillDetailTypes> = [ "str", "con", "dex", "int", "cha" ]

export interface ISkillData {
  id: string;
  name: string;
  description: string;
  detail: string;
  family: SkillDetailTypes;
  [k: string]: unknown;
}
