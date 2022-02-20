export type Backgrounds = IBackground[];

export interface IBackground {
  id: string;
  name: string;
  description: string;
  [k: string]: unknown;
}
