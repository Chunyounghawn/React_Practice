import {DEFAULT_THEME} from '../status/ThemeMode'
import {DARK_THEME, LIGHT_THEME} from '../actions/ThemeMode'
import { combineReducers } from 'redux'

function ChangeThemeMode(state = DEFAULT_THEME, action){
  
}

const ChangeThemeModeReducer = combineReducers({ChangeThemeMode})