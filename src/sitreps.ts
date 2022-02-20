export type Sitreps = ISitrep[];

export interface ISitrep {
  id: string;
  name: string;
  description: string;
  pcVictory?: string;
  enemyVictory?: string;
  noVictory?: string;
  deployment?: string;
  objective?: string;
  controlZone?: string;
  extraction?: string;
  [k: string]: unknown;
}
