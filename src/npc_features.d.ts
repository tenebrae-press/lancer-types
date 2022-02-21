import { ITagData } from "./tags";
import { IRangeData } from "./weapons";
export declare type NpcFeatureType = "Reaction" | "System" | "Tech" | "Trait" | "Weapon";
export declare type NpcFeatures = (INpcFeatureData | INpcWeaponData | INpcReactionData | INpcSystemData | INpcTechData)[];
export interface INpcFeatureData {
    origin: IOriginData;
    name: string;
    tags: ITagData[];
    effect?: string;
    type: NpcFeatureType;
    locked: boolean;
    bonus?: {
        [k: string]: unknown;
    };
    override?: {
        [k: string]: unknown;
    };
    hide_active: boolean;
    [k: string]: unknown;
}
export interface IOriginData {
    type: string;
    name: string;
    base: boolean;
    [k: string]: unknown;
}
export interface INpcWeaponData {
    origin: IOriginData;
    name: string;
    tags: ITagData[];
    effect?: string;
    type: "Weapon";
    on_hit: string;
    damage: INpcDamageData[];
    range: IRangeData[];
    locked: boolean;
    bonus?: {
        [k: string]: unknown;
    };
    override?: {
        [k: string]: unknown;
    };
    hide_active: boolean;
    weapon_type: string;
    accuracy: number[];
    attack_bonus: number[];
    [k: string]: unknown;
}
export interface INpcDamageData {
    type: string;
    damage: number[];
    [k: string]: unknown;
}
export interface INpcReactionData {
    origin: IOriginData;
    name: string;
    tags: ITagData[];
    effect?: string;
    type: "Reaction";
    locked: boolean;
    bonus?: {
        [k: string]: unknown;
    };
    override?: {
        [k: string]: unknown;
    };
    hide_active: boolean;
    trigger: string;
    [k: string]: unknown;
}
export interface INpcSystemData {
    origin: IOriginData;
    name: string;
    tags: ITagData[];
    effect?: string;
    type: "System";
    locked: boolean;
    bonus?: {
        [k: string]: unknown;
    };
    override?: {
        [k: string]: unknown;
    };
    hide_active: boolean;
    [k: string]: unknown;
}
export interface INpcTechData {
    origin: IOriginData;
    name: string;
    tags: ITagData[];
    effect?: string;
    type: "Tech";
    locked: boolean;
    bonus?: {
        [k: string]: unknown;
    };
    override?: {
        [k: string]: unknown;
    };
    hide_active: boolean;
    accuracy?: number[];
    attack_bonus?: number[];
    tech_type: string;
    [k: string]: unknown;
}
