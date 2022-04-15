import { combineReducers } from "redux"
import ThemeSelector from "./ThemeSelector"
import toDos from "./toDos"

const rootReducer = combineReducers({
  ThemeSelector,
  toDos,
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
