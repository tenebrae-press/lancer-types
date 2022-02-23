export type NpcTemplates = INpcTemplateData[];

export interface INpcTemplateData {
  id: string;
  name: string;
  description: string;
  base_features: string[];
  optional_features: string[];
  power: number;
  [k: string]: unknown;
}
