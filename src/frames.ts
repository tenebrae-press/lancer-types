import { IActionData } from "./actions";
import { ActivationType, Duration, IBonusData, ICounterData, ImageTag, ISynergyData } from "./common";
import { ITagData } from "./tags";
import { IDeployableData } from "./weapons";

export type Frames = IFrameData[];

export interface IFrameData {
  id: string;
  license_level: number;
  source: string;
  name: string;
  mechtype: [];
  mounts: [];
  stats: IFrameStats;
  traits: IFrameTraitData[];
  core_system: ICoreSystemData;
  y_pos?: number;
  image_url?: string;
  other_art?: {
    tag?: ImageTag;
    src?: string;
    url?: string;
    [k: string]: unknown;
  }[];
  description: string;
  actions?: IActionData[];
  bonuses?: IBonusData[];
  synergies?: ISynergyData[];
  deployables?: IDeployableData[];
  counters?: ICounterData[];
  integrated?: string[];
  tags?: ITagData[];
  [k: string]: unknown;
}
export interface IFrameStats {
  size: number;
  structure: number;
  stress: number;
  armor: number;
  hp: number;
  evasion: number;
  edef: number;
  heatcap: number;
  repcap: number;
  sensor_range: number;
  tech_attack: number;
  save: number;
  speed: number;
  sp: number;
  [k: string]: unknown;
}
export interface IFrameTraitData {
  name: string;
  description: string;
  use?: Duration;
  actions?: IActionData[];
  bonuses?: IBonusData[];
  synergies?: ISynergyData[];
  deployables?: IDeployableData[];
  counters?: ICounterData[];
  integrated?: string[];
  [k: string]: unknown;
}

export interface ICoreSystemData {
  name: string;
  description?: string;
  active_name: string;
  active_effect: string;
  activation: ActivationType;
  deactivation?: ActivationType;
  use?: Duration;
  active_actions?: IActionData[];
  active_bonuses?: IBonusData[];
  active_synergies?: ISynergyData[];
  passive_name?: string;
  passive_effect?: string;
  passive_actions?: IActionData[];
  passive_bonuses?: IBonusData[];
  passive_synergies?: ISynergyData[];
  deployables?: IDeployableData[];
  counters?: ICounterData[];
  integrated?: string[];
  tags?: ITagData[];
  [k: string]: unknown;
}
