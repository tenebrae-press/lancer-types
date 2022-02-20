export type Statuses = IStatus[];

export interface IStatus {
  name: string;
  type: "Status" | "Condition";
  exclusive?: "Mech" | "Pilot";
  icon?: string;
  icon_url?: string;
  effects: string;
  [k: string]: unknown;
}
