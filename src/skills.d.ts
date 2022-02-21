export declare type Skills = ISkillData[];
export declare type SkillDetailTypes = "str" | "con" | "dex" | "int" | "cha";
export declare const SKILL_DETAILS: Array<SkillDetailTypes>;
export interface ISkillData {
    id: string;
    name: string;
    description: string;
    detail: string;
    family: SkillDetailTypes;
    [k: string]: unknown;
}
