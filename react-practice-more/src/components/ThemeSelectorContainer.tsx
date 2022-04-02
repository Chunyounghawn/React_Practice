import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { darktheme, lighttheme } from '../modules/ThemeSelector';
import ThemeSelector from '../components/ThemeSelector';

function ThemeSelectorContainer() {
  const theme = useSelector((state: RootState) => state.ThemeSelector.theme)
  const dispatch = useDispatch();

  const ChangeToDarkTheme = () => {
    dispatch(darktheme())
  }

  const ChangeToLightTheme = () => {
    dispatch(lighttheme())
  }

  return (
    <ThemeSelector
      theme={theme}
      ChangeToDarkTheme={ChangeToDarkTheme}
      ChangeToLightTheme={ChangeToLightTheme}
    />
  )
}
export default ThemeSelectorContainer