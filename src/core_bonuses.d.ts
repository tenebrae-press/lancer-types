import { IActionData } from "./actions";
import { IBonusData, ICounterData, ISynergyData } from "./common";
import { ITagData } from "./tags";
import { IDeployableData } from "./weapons";
export declare type CoreBonuses = ICoreBonusData[];
export interface ICoreBonusData {
    id: string;
    source: string;
    name: string;
    description: string;
    actions?: IActionData[];
    bonuses?: IBonusData[];
    synergies?: ISynergyData[];
    deployables?: IDeployableData[];
    counters?: ICounterData[];
    integrated?: string[];
    tags?: ITagData[];
    effect: string;
    mounted_effect?: string;
    [k: string]: unknown;
}
