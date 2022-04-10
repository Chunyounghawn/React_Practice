import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import App from "./App"
import { darkTheme } from "./theme"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./modules"
import { createGlobalStyle } from "styled-components"

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
