//action
const DARKTHEME = "ThemeSelector/DARKTHEME" as const
const LIGHTTHEME = "ThemeSelector/LIGHTTHEME" as const

//action creator(action Types)
export const darktheme = () => ({ type: DARKTHEME })
export const lighttheme = () => ({ type: LIGHTTHEME })

type ThemeState = {
  Rstate: {
    bgColor: string
    textColor: string
    accentColor: string
  }
}
const initialState: ThemeState = {
  Rstate: {
    bgColor: "#2f3640",
    textColor: "black",
    accentColor: "#9c88ff",
  },
}

type ThemeSelectorAction =
  | ReturnType<typeof darktheme>
  | ReturnType<typeof lighttheme>

//reducer
function ThemeSelector(
  state: ThemeState = initialState,
  action: ThemeSelectorAction
): ThemeState {
  switch (action.type) {
    case DARKTHEME:
      return {
        Rstate: {
          bgColor: "#2f3640",
          textColor: "black",
          accentColor: "#9c88ff",
        },
      }
    case LIGHTTHEME:
      return {
        Rstate: {
          bgColor: "whitesmoke",
          textColor: "black",
          accentColor: "#9c88ff",
        },
      }
    default:
      return state
  }
}

export default ThemeSelector
