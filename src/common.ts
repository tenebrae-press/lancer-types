export type ActivationType =
  | "Free" | "Full" | "Full Tech"
  | "Invade" | "Move" | "None" | "Other"
  | "Passive" | "Protocol" | "Quick"
  | "Quick Tech" | "Reaction";

export const ACTIVATION_TYPES: Array<ActivationType> = [
    "Free", "Full", "Full Tech", "Invade",
    "Move", "None", "Other", "Passive",
    "Protocol", "Quick", "Quick Tech", "Reaction",
];
export type DamageType = "Burn" | "Energy" | "Explosive" | "Heat" | "Kinetic" | "Variable";
export const DAMAGE_TYPES: Array<DamageType> = [
    "Burn", "Energy", "Explosive", "Heat", "Kinetic", "Variable"
];
export type RangeType = "Blast" | "Burst" | "Cone" | "Line" | "Range" | "Threat" | "Thrown";
export const RANGE_TYPES: Array<RangeType> = ["Blast", "Burst", "Cone", "Line", "Range", "Threat", "Thrown"];
export type ImageTag = "enemy" | "frame" | "location" | "logo" | "map" | "mech" | "misc" | "npc" | "object" | "pilot";
export const IMAGE_TAGS: Array<ImageTag> = ["enemy", "frame", "location", "logo", "map", "mech", "misc", "npc", "object", "pilot"]
export type Duration = "Encounter" | "Free" | "Mission" | "Next Round" | "Next Turn" | "Round" | "Turn";
export const DURATIONS: Array<Duration> = ["Encounter", "Free", "Mission", "Next Round", "Next Turn", "Round", "Turn"]
export type MechType = "Artillery" | "Balanced" | "Controller" | "Defender" | "Striker" | "Support";
export const MECH_TYPES: Array<MechType> = ["Artillery", "Balanced", "Controller", "Defender", "Striker", "Support"];
export type WeaponSize = "Auxiliary" | "Heavy" | "Main" | "Superheavy";
export const WEAPON_SIZES: Array<WeaponSize> = ["Auxiliary", "Heavy", "Main", "Superheavy"];
export type WeaponType = "CQB" | "Cannon" | "Launcher" | "Melee" | "Nexus" | "Rifle";
export const WEAPON_TYPES: Array<WeaponType> = ["CQB", "Cannon", "Launcher", "Melee", "Nexus", "Rifle"];
export type MountType = "Aux" | "Aux/Aux" | "Flex" | "Heavy" | "Integrated" | "Main" | "Main/Aux";
export const MOUNT_TYPES: Array<MountType> = ["Aux", "Aux/Aux", "Flex", "Heavy", "Integrated", "Main", "Main/Aux"]

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

export interface IClockData {
    id: string
    name: string
    min: number
    max: number
}
