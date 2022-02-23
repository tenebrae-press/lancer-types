import { Actions } from './actions';
import { Backgrounds } from './backgrounds';
import { CoreBonuses } from './core_bonuses';
import { Environments } from './environments';
import { Frames } from './frames';
import { IManifest } from './manifest';
import { Manufacturers } from './manufacturers';
import { Mods } from './mods';
import { NpcClasses } from './npc_classes';
import { NpcFeatures } from './npc_features';
import { NpcTemplates } from './npc_templates';
import { PilotGear } from './pilot_gear';
import { Reserves } from './reserves';
import { Sitreps } from './sitreps';
import { Skills } from './skills';
import { Statuses } from './statuses';
import { Systems } from './systems';
import { Tags } from './tags';
import { Talents } from './talents';
import { Weapons } from './weapons';

export type LCPContentKeys = 
    | 'actions' 
    | 'backgrounds'
    | 'core_bonuses'
    | 'environments'
    | 'frames'
    | 'manufacturers'
    | 'mods'
    | 'npc_classes'
    | 'npc_features'
    | 'npc_templates'
    | 'pilot_gear'
    | 'reserves'
    | 'sitreps'
    | 'skills'
    | 'statuses'
    | 'systems'
    | 'tags'
    | 'talents'
    | 'weapons';

export const LCP_CONTENT_KEYS: Array<LCPContentKeys> = [
    'actions',
    'backgrounds',
    'core_bonuses',
    'environments',
    'frames',
    'manufacturers',
    'mods',
    'npc_classes',
    'npc_features',
    'npc_templates',
    'pilot_gear',
    'reserves',
    'sitreps',
    'skills',
    'statuses',
    'systems',
    'tags',
    'talents',
    'weapons'
];

export type LCPContentTypes =
    | Actions 
    | Backgrounds
    | CoreBonuses
    | Environments
    | Frames
    | Manufacturers
    | Mods
    | NpcClasses
    | NpcFeatures
    | NpcTemplates
    | PilotGear
    | Reserves
    | Sitreps
    | Skills
    | Statuses
    | Skills
    | Statuses
    | Systems
    | Tags
    | Talents
    | Weapons;

export interface ILCPContent {
    actions?: Actions;
    backgrounds?: Backgrounds;
    core_bonuses?: CoreBonuses;
    environments?: Environments;
    frames?: Frames;
    lcp_manifest: IManifest;
    manufacturers?: Manufacturers;
    mods?: Mods;
    npc_classes?: NpcClasses;
    npc_features?: NpcFeatures;
    npc_templates?: NpcTemplates;
    pilot_gear?: PilotGear;
    reserves?: Reserves;
    sitreps?: Sitreps;
    skills?: Skills;
    statuses?: Statuses;
    systems?: Systems;
    tags?: Tags;
    tables?: Record<string, Array<string>>;
    talents?: Talents;
    weapons?: Weapons;
    [k: string]: unknown;
}