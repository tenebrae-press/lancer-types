import { IActionData } from "./src/actions";
import { IBackground } from "./src/backgrounds";
import {
  ACTIVATION_TYPES,
  DAMAGE_TYPES,
  RANGE_TYPES,
  IMAGE_TAGS,
  DURATIONS,
  MECH_TYPES,
  WEAPON_TYPES,
  WEAPON_SIZES,
  MOUNT_TYPES,
} from "./src/common";
import { ICoreBonusData } from "./src/core_bonuses";
import { IEnvironment } from "./src/environments";
import { ICoreSystemData, IFrameData } from "./src/frames";
import { LCP_CONTENT_KEYS } from "./src/lcp";
import { IManufacturerData } from "./src/manufacturers";
import { IWeaponModData } from "./src/mods";
import { INpcClassData } from "./src/npc_classes";
import { INpcSystemData } from "./src/npc_features";
import {
  IPilotArmorData,
  IPilotEquipmentData,
  IPilotWeaponData,
} from "./src/pilot_gear";
import { IReserveData, RESERVE_TYPES } from "./src/reserves";
import { ISitrep } from "./src/sitreps";
import { ISkillData, SKILL_DETAILS } from "./src/skills";
import { STATUS_TYPES, STATUS_EXCLUSIVES, IStatus } from "./src/statuses";
import { IMechSystemData, SYSTEM_TYPES } from "./src/systems";
import { ITagData } from "./src/tags";
import { ITalentData } from "./src/talents";
import { IMechWeaponData } from "./src/weapons";

export * from "./src/actions";
export * from "./src/backgrounds";
export * from "./src/common";
export * from "./src/core_bonuses";
export * from "./src/environments";
export * from "./src/frames";
export * from "./src/lcp";
export * from "./src/manifest";
export * from "./src/manufacturers";
export * from "./src/mods";
export * from "./src/npc_classes";
export * from "./src/npc_features";
export * from "./src/npc_templates";
export * from "./src/pilot_gear";
export * from "./src/reserves";
export * from "./src/sitreps";
export * from "./src/skills";
export * from "./src/statuses";
export * from "./src/systems";
export * from "./src/tags";
export * from "./src/talents";
export * from "./src/weapons";

export type LCPContentElement =
  | IActionData
  | IBackground
  | ICoreBonusData
  | IEnvironment
  | IFrameData
  | IManufacturerData
  | IWeaponModData
  | INpcClassData
  | INpcClassData
  | INpcClassData
  | IPilotArmorData
  | IPilotEquipmentData
  | IPilotWeaponData
  | IReserveData
  | ISitrep
  | ISkillData
  | IStatus
  | ICoreSystemData
  | IMechSystemData
  | INpcSystemData
  | ITagData
  | ITalentData
  | IMechWeaponData;

export default {
  ACTIVATION_TYPES,
  DAMAGE_TYPES,
  RANGE_TYPES,
  IMAGE_TAGS,
  DURATIONS,
  MECH_TYPES,
  WEAPON_TYPES,
  WEAPON_SIZES,
  MOUNT_TYPES,
  LCP_CONTENT_KEYS,
  RESERVE_TYPES,
  SKILL_DETAILS,
  STATUS_TYPES,
  STATUS_EXCLUSIVES,
  SYSTEM_TYPES,
};
