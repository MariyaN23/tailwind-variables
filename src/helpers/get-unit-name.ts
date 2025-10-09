import { type Unit } from "@/helpers/tailwind-units.ts";

export type UnitName = string | false

export const getUnitName = (object: Unit, key: number): UnitName => {
    if (object[key]) {
        return object[key]
    }
    return false
}
