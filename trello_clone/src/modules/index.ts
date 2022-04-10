import { combineReducers } from "redux"
import ThemeSelector from "./ThemeSelector"

const rootReducer = combineReducers({
  ThemeSelector,
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
