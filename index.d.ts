import { IActionData } from "./src/actions";
import { IBackground } from "./src/backgrounds";
import { ICoreBonusData } from "./src/core_bonuses";
import { IEnvironment } from "./src/environments";
import { ICoreSystemData, IFrameData } from "./src/frames";
import { IManufacturerData } from "./src/manufacturers";
import { IWeaponModData } from "./src/mods";
import { INpcClassData } from "./src/npc_classes";
import { INpcSystemData } from "./src/npc_features";
import { IPilotArmorData, IPilotEquipmentData, IPilotWeaponData } from "./src/pilot_gear";
import { IReserveData } from "./src/reserves";
import { ISitrep } from "./src/sitreps";
import { ISkillData } from "./src/skills";
import { IStatus } from "./src/statuses";
import { IMechSystemData } from "./src/systems";
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
export declare type LCPContentElement = IActionData | IBackground | ICoreBonusData | IEnvironment | IFrameData | IManufacturerData | IWeaponModData | INpcClassData | INpcClassData | INpcClassData | IPilotArmorData | IPilotEquipmentData | IPilotWeaponData | IReserveData | ISitrep | ISkillData | IStatus | ICoreSystemData | IMechSystemData | INpcSystemData | ITagData | ITalentData | IMechWeaponData;
declare const _default: {
    ACTIVATION_TYPES: import("./src/common").ActivationType[];
    DAMAGE_TYPES: import("./src/common").DamageType[];
    RANGE_TYPES: import("./src/common").RangeType[];
    IMAGE_TAGS: import("./src/common").ImageTag[];
    DURATIONS: import("./src/common").Duration[];
    MECH_TYPES: import("./src/common").MechType[];
    WEAPON_TYPES: import("./src/common").WeaponType[];
    WEAPON_SIZES: import("./src/common").WeaponSize[];
    MOUNT_TYPES: import("./src/common").MountType[];
    LCP_CONTENT_KEYS: import("./src/lcp").LCPContentKeys[];
    RESERVE_TYPES: import("./src/reserves").ReserveType[];
    SKILL_DETAILS: import("./src/skills").SkillDetailTypes[];
    STATUS_TYPES: import("./src/statuses").StatusType[];
    STATUS_EXCLUSIVES: import("./src/statuses").StatusExclusiveType[];
    SYSTEM_TYPES: import("./src/systems").SystemType[];
};
export default _default;
