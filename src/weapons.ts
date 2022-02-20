import { IActionData } from "./actions";
import { ActivationType, IBonusData, ICounterData, IDamageData, ISynergyData, RangeType, WeaponSize, WeaponType } from "./common";
import { ITagData } from "./tags";

export type Weapons = IMechWeaponData[];

export interface IMechWeaponData {
  id: string;
  source: string;
  name: string;
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
  mount: WeaponSize;
  type: WeaponType;
  skirmish?: boolean;
  barrage?: boolean;
  cost?: number;
  on_attack?: string;
  on_hit?: string;
  on_crit?: string;
  damage?: IDamageData[];
  range?: IRangeData[];
  profiles?: IWeaponProfileData[];
  sp?: number;
  talent_item?: boolean;
  frame_id?: boolean;
  ammo?: unknown[];
  [k: string]: unknown;
}

export interface IDeployableData {
  name: string;
  detail: string;
  type: string;
  activation?: ActivationType;
  instances?: number;
  deactivation?: ActivationType;
  recall?: ActivationType;
  redeploy?: ActivationType;
  size?: string | number;
  cost?: string | number;
  armor?: string | number;
  hp?: string | number;
  evasion?: string | number;
  edef?: string | number;
  heatcap?: string | number;
  repcap?: string | number;
  sensor_range?: string | number;
  tech_attack?: string | number;
  save?: string | number;
  speed?: string | number;
  actions?: IActionData[];
  bonuses?: IBonusData[];
  synergies?: ISynergyData[];
  counters?: ICounterData[];
  tags?: ITagData[];
  pilot?: boolean;
  mech?: boolean;
  id?: string;
  description?: string;
  deployables?: IDeployableData[];
  integrated?: string[];
  brew?: string;
  [k: string]: unknown;
}

export interface IRangeData {
  type: RangeType;
  val: number;
  override?: boolean;
  bonus?: number;
  [k: string]: unknown;
}

export interface IWeaponProfileData {
  name: string;
  effect?: string;
  skirmish?: boolean;
  barrage?: boolean;
  cost?: number;
  on_attack?: string;
  on_hit?: string;
  on_crit?: string;
  damage?: IDamageData[];
  range?: IRangeData[];
  actions?: IActionData[];
  bonuses?: IBonusData[];
  synergies?: ISynergyData[];
  deployables?: IDeployableData[];
  counters?: ICounterData[];
  integrated?: string[];
  [k: string]: unknown;
}
