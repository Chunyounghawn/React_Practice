const DARKTHEME = "ThemeSelector/DARKTHEME" as const
const LIGHTTHEME = "ThemeSelector/LIGHTTHEME" as const

export const darktheme = () => ({ type: DARKTHEME })
export const lighttheme = () => ({ type: LIGHTTHEME })

type ThemeState = {
  theme: string
}
const initialState: ThemeState = {
  theme: "darkTheme",
}

type ThemeSelectorAction =
  | ReturnType<typeof darktheme>
  | ReturnType<typeof lighttheme>

function ThemeSelector(
  state: ThemeState = initialState,
  action: ThemeSelectorAction
): ThemeState {
  switch (action.type) {
    case DARKTHEME:
      return { theme: "darkTheme" }
    case LIGHTTHEME:
      return { theme: "lightTheme" }
    default:
      return state
  }
}

export default ThemeSelector
