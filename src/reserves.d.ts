import { IBonusData, ICounterData, ISynergyData } from "./common";
import { IActionData } from "./actions";
import { IDeployableData } from "./weapons";
export declare type Reserves = IReserveData[];
export declare type ReserveType = "Mech" | "Tactical" | "Resource" | "Bonus";
export declare const RESERVE_TYPES: Array<ReserveType>;
export interface IReserveData {
    id: string;
    type: ReserveType;
    name: string;
    description?: string;
    actions?: IActionData[];
    bonuses?: IBonusData[];
    synergies?: ISynergyData[];
    deployables?: IDeployableData[];
    counters?: ICounterData[];
    integrated?: string[];
    label: string;
    resource_name?: string;
    resource_note?: string;
    resource_cost?: string;
    used?: boolean;
    consumable?: boolean;
    [k: string]: unknown;
}
