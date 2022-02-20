import { IBonusData, ICounterData, ISynergyData } from "./common";
import { IActionData } from "./actions";
import { IDeployableData } from "./weapons";

export type Reserves =
  IReserveData[];

export interface IReserveData {
  id: string;
  type: "Mech" | "Tactical" | "Resource" | "Bonus";
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
