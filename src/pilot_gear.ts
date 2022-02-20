import { IActionData } from "./actions";
import { IBonusData, ICounterData, IDamageData, ISynergyData } from "./common";
import { ITagData } from "./tags";
import { IDeployableData, IRangeData } from "./weapons";

export type PilotGear = (
  | IPilotWeaponData
  | IPilotArmorData
  | IPilotEquipmentData
)[];

export interface IPilotWeaponData {
  id: string;
  name: string;
  description?: string;
  actions?: IActionData[];
  bonuses?: IBonusData[];
  synergies?: ISynergyData[];
  deployables?: IDeployableData[];
  counters?: ICounterData[];
  integrated?: string[];
  tags?: ITagData[];
  effect?: string;
  type: string;
  damage?: IDamageData[];
  range?: IRangeData[];
  [k: string]: unknown;
}

export interface IPilotArmorData {
  id: string;
  name: string;
  description?: string;
  actions?: IActionData[];
  bonuses?: IBonusData[];
  synergies?: ISynergyData[];
  deployables?: IDeployableData[];
  counters?: ICounterData[];
  integrated?: string[];
  tags?: ITagData[];
  type: string;
  hp_bonus?: number;
  speed?: number;
  speed_bonus?: number;
  armor?: number;
  edef?: number;
  edef_bonus?: number;
  evasion?: number;
  evasion_bonus?: number;
  [k: string]: unknown;
}
export interface IPilotEquipmentData {
  id: string;
  name: string;
  description?: string;
  actions?: IActionData[];
  bonuses?: IBonusData[];
  synergies?: ISynergyData[];
  deployables?: IDeployableData[];
  counters?: ICounterData[];
  integrated?: string[];
  tags?: ITagData[];
  type: string;
  [k: string]: unknown;
}
