import React from "react"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import App from "./App"

import { Provider } from "react-redux";
import { createStore } from "redux"
import rootReducer from './modules'

const queryClient = new QueryClient()

const store = createStore(rootReducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>

        <App />

      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
