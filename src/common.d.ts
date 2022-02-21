export declare type ActivationType = "Free" | "Full" | "Full Tech" | "Invade" | "Move" | "None" | "Other" | "Passive" | "Protocol" | "Quick" | "Quick Tech" | "Reaction";
export declare const ACTIVATION_TYPES: Array<ActivationType>;
export declare type DamageType = "Burn" | "Energy" | "Explosive" | "Heat" | "Kinetic" | "Variable";
export declare const DAMAGE_TYPES: Array<DamageType>;
export declare type RangeType = "Blast" | "Burst" | "Cone" | "Line" | "Range" | "Threat" | "Thrown";
export declare const RANGE_TYPES: Array<RangeType>;
export declare type ImageTag = "enemy" | "frame" | "location" | "logo" | "map" | "mech" | "misc" | "npc" | "object" | "pilot";
export declare const IMAGE_TAGS: Array<ImageTag>;
export declare type Duration = "Encounter" | "Free" | "Mission" | "Next Round" | "Next Turn" | "Round" | "Turn";
export declare const DURATIONS: Array<Duration>;
export declare type MechType = "Artillery" | "Balanced" | "Controller" | "Defender" | "Striker" | "Support";
export declare const MECH_TYPES: Array<MechType>;
export declare type WeaponSize = "Auxiliary" | "Heavy" | "Main" | "Superheavy";
export declare const WEAPON_SIZES: Array<WeaponSize>;
export declare type WeaponType = "CQB" | "Cannon" | "Launcher" | "Melee" | "Nexus" | "Rifle";
export declare const WEAPON_TYPES: Array<WeaponType>;
export declare type MountType = "Aux" | "Aux/Aux" | "Flex" | "Heavy" | "Integrated" | "Main" | "Main/Aux";
export declare const MOUNT_TYPES: Array<MountType>;
export interface ICounterData {
    id: string;
    name: string;
    level?: number;
    min?: number;
    max?: number;
    default_value?: number;
    custom?: boolean;
    [k: string]: unknown;
}
export interface ISynergyData {
    locations: string[];
    detail: string;
    weapon_types?: string[];
    system_types?: string[];
    weapon_sizes?: string[];
    [k: string]: unknown;
}
export interface IDamageData {
    type: DamageType;
    val: string | number;
    override?: boolean;
    bonus?: string | number;
    [k: string]: unknown;
}
export interface IBonusData {
    id: string;
    val: string | number;
    damage_types?: DamageType[];
    range_types?: RangeType[];
    weapon_types?: WeaponType[];
    weapon_sizes?: WeaponSize[];
    overwrite?: boolean;
    replace?: boolean;
    [k: string]: unknown;
}
