import { combineReducers } from "redux"
import ThemeSelector from "./ThemeSelector"
import toDos from "./toDos"

const rootReducer = combineReducers({
  ThemeSelector,
  toDos,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
