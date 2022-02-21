export declare type Environments = IEnvironment[];
export interface IEnvironment {
    id: string;
    name: string;
    description: string;
    [k: string]: unknown;
}
