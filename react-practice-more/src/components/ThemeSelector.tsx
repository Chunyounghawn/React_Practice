import React from 'react';

type ThemeProps = {
  theme: string;
  ChangeToDarkTheme: () => void;
  ChangeToLightTheme: () => void;
}

function ThemeSelector({
  theme,
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