export declare type Tags = ITagData[];
export interface ITagData {
    id: string;
    name: string;
    description: string;
    hidden?: boolean;
    filter_ignore?: boolean;
    [k: string]: unknown;
}
