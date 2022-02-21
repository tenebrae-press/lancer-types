import { IActionData } from "./actions";
import { IBonusData, ISynergyData, ICounterData } from "./common";
import { ITagData } from "./tags";
import { IDeployableData } from "./weapons";
export declare type Talents = ITalentData[];
export interface ITalentData {
    id: string;
    name: string;
    description: string;
    actions?: IActionData[];
    bonuses?: IBonusData[];
    synergies?: ISynergyData[];
    deployables?: IDeployableData[];
    counters?: ICounterData[];
    integrated?: string[];
    tags?: ITagData[];
    terse?: string;
    ranks: ITalentRankData[];
    [k: string]: unknown;
}
export interface ITalentRankData {
    exclusive?: boolean;
    name: string;
    description: string;
    actions?: IActionData[];
    bonuses?: IBonusData[];
    synergies?: ISynergyData[];
    deployables?: IDeployableData[];
    counters?: ICounterData[];
    integrated?: string[];
    brew?: string;
    tags?: ITagData[];
    [k: string]: unknown;
}
