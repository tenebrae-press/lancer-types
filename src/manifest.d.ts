export interface IManifest {
    name: string;
    item_prefix: string;
    author: string;
    version: string;
    description?: string;
    website?: string;
    image_url?: string;
    [k: string]: unknown;
}
