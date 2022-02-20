import { ActivationType } from "./common";

export type Actions = IActionData[];

export interface IActionData {
  id: string;
  name: string;
  activation: ActivationType
  cost?: number;
  frequency?: string;
  init?: string;
  trigger?: string;
  terse?: string;
  detail: string;
  pilot?: boolean;
  mech?: boolean;
  hide_active?: boolean;
  synergy_locations?: string[];
  confirm?: string[];
  log?: string;
  ignore_used?: boolean;
  heat_cost?: number;
  [k: string]: unknown;
}
