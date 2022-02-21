export declare type Statuses = IStatus[];
export declare type StatusType = "Status" | "Condition";
export declare const STATUS_TYPES: Array<StatusType>;
export declare type StatusExclusiveType = "Mech" | "Pilot";
export declare const STATUS_EXCLUSIVES: Array<StatusExclusiveType>;
export interface IStatus {
    name: string;
    type: StatusType;
    exclusive?: StatusExclusiveType;
    icon?: string;
    icon_url?: string;
    effects: string;
    [k: string]: unknown;
}
