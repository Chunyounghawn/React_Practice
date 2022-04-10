import React from "react"

//Props의 타입을 정해주고 컴포넌트에서 props를 받아올때 타입을 지정해준다.
type ThemeProps = {
  Rstate: {
    bgColor: string
    textColor: string
    accentColor: string
  }
  ChangeToDarkTheme: () => void
  ChangeToLightTheme: () => void
}

function ThemeSelector({
  Rstate: { bgColor, textColor, accentColor },
  ChangeToDarkTheme,
  ChangeToLightTheme,
}: ThemeProps) {
  return (
    <div>
      <button onClick={ChangeToDarkTheme}>Toggle Dark Mode</button>
      <button onClick={ChangeToLightTheme}>Toggle light Mode</button>
    </div>
  )
}

export default ThemeSelector
