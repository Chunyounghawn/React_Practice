import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../modules"
import { darktheme, lighttheme } from "../modules/ThemeSelector"
import ThemeSelector from "./ThemeSelector"

function ThemeSelectorContainer() {
  const theme = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const ChangeToDarkTheme = () => {
    dispatch(darktheme())
  }

  const ChangeToLightTheme = () => {
    dispatch(lighttheme())
  }

  return (
    <ThemeSelector
      Rstate={theme.ThemeSelector.Rstate}
      ChangeToDarkTheme={ChangeToDarkTheme}
      ChangeToLightTheme={ChangeToLightTheme}
    />
  )
}
export default ThemeSelectorContainer
