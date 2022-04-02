import React from 'react';

type ThemeProps = {
  Rstate: {
    bgColor: string
    textColor: string
    accentColor: string
  }
  ChangeToDarkTheme: () => void;
  ChangeToLightTheme: () => void;
}

function ThemeSelector({
  Rstate: {
    bgColor,
    textColor,
    accentColor,
  },
  ChangeToDarkTheme,
  ChangeToLightTheme
}: ThemeProps) {
  return (
    <div>
      <button onClick={ChangeToDarkTheme}>Toggle Dark Mode</button>
      <button onClick={ChangeToLightTheme}>Toggle light Mode</button>
    </div>

  )
}

export default ThemeSelector