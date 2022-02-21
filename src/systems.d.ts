import { IBonusData, ISynergyData, ICounterData } from "./common";
import { ITagData } from "./tags";
import { IActionData } from "./actions";
import { IDeployableData } from "./weapons";
export declare type SystemType = "AI" | "Armor" | "Deployable" | "Drone" | "Flight System" | "Integrated" | "Mod" | "Shield" | "System" | "Tech";
export declare const SYSTEM_TYPES: Array<SystemType>;
export declare type Systems = IMechSystemData[];
export interface IMechSystemData {
    id: string;
    source: string;
    name?: string;
    license: string;
    license_level: number;
    description?: string;
    actions?: IActionData[];
    bonuses?: IBonusData[];
    synergies?: ISynergyData[];
    deployables?: IDeployableData[];
    counters?: ICounterData[];
    integrated?: string[];
    tags?: ITagData[];
    effect?: string;
    type?: SystemType;
    sp?: number;
    talent_item?: boolean;
    frame_id?: boolean;
    ammo?: unknown[];
    [k: string]: unknown;
}
