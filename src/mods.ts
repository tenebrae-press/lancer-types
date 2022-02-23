import { IActionData } from "./actions";
import { IBonusData, ICounterData, IDamageData, ISynergyData, MountType, WeaponType } from "./common";
import { ITagData } from "./tags";
import { IDeployableData, IRangeData } from "./weapons";

export type Mods = IWeaponModData[];

export interface IWeaponModData {
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
  sp?: number;
  talent_item?: boolean;
  frame_id?: boolean;
  ammo?: string[];
  allowed_types?: WeaponType[];
  allowed_sizes?: MountType[];
  restricted_types?: WeaponType[];
  restricted_sizes?: MountType[];
  added_tags?: ITagData[];
  added_damage?: IDamageData[];
  added_range?: IRangeData[];
  [k: string]: unknown;
}
