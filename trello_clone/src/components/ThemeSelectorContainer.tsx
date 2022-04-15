import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../modules"
import { darktheme, lighttheme } from "../modules/ThemeSelector"
import ThemeSelector from "./ThemeSelector"

//컨테이너 component
//이 안에서 State값을 불러오고 수정을 위한 액션을 dispatch 한다.
//또 프리젠테이셔널 component를 불러와서 사용한다. ( 상위 Component )

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
