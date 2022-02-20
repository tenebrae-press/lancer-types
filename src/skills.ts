export type Skills = ISkillData[];

export interface ISkillData {
  id: string;
  name: string;
  description: string;
  detail: string;
  family: "str" | "con" | "dex" | "int" | "cha";
  [k: string]: unknown;
}
