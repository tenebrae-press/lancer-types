export declare type Manufacturers = IManufacturerData[];
export interface IManufacturerData {
    name: string;
    id: string;
    description: string;
    quote: string;
    light: string;
    dark: string;
    logo_url?: string;
    [k: string]: unknown;
}
