export type NpcClasses = INpcClassData[];

export interface INpcClassData {
  name: string;
  stats: INpcClassStats;
  info: {
    flavor: string;
    tactics: string;
    [k: string]: unknown;
  };
  role: string;
  base_features: string[];
  optional_features: string[];
  power: number;
  [k: string]: unknown;
}

export interface INpcClassStats {
  activations: number[];
  armor: number[];
  hp: number[];
  evade: number[];
  edef: number[];
  heatcap: number[];
  speed: number[];
  sensor: number[];
  save: number[];
  hull: number[];
  agility: number[];
  systems: number[];
  engineering: number[];
  size: number[][];
  structure?: number[];
  stress?: number[];
  [k: string]: unknown;
}
