import { ThemeTypes } from "./types"

interface Change_DARK_THEME {
  type: ThemeTypes.DARK_THEME
}

interface Change_LIGHT_THEME {
  type: ThemeTypes.LIGHT_THEME
}

export type Actions = Change_DARK_THEME | Change_LIGHT_THEME
