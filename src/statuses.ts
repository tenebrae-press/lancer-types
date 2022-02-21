export type Statuses = IStatus[];

export type StatusType = "Status" | "Condition";
export const STATUS_TYPES: Array<StatusType> = ["Status", "Condition"];
export type StatusExclusiveType = "Mech" | "Pilot";
export const STATUS_EXCLUSIVES: Array<StatusExclusiveType> = ["Mech", "Pilot"];

export interface IStatus {
  name: string;
  type: StatusType;
  exclusive?: StatusExclusiveType;
  icon?: string;
  icon_url?: string;
  effects: string;
  [k: string]: unknown;
}
