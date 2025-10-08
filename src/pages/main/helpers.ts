import { fontSizes } from "@/pages/main/tailwind-units.ts";

export const getFontSizeName = (px: number) => {
    if (fontSizes[px]) {
        return fontSizes[px]
    }
    return false
}
