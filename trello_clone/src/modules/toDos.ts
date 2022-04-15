const CHANGE_DND = "toDos/CHANGE_DND" as const

export const change_dnd = () => ({ type: CHANGE_DND })

type change_dnd_action = ReturnType<typeof change_dnd>

type dndState = {
  toDos: Array<string>
}

const initialState: dndState = {
  toDos: ["a", "b", "c", "d", "e", "f"],
}

function toDos(state: dndState = initialState, action: change_dnd_action) {
  return state
}
//https://velog.io/@kirin/shop-project-reducer-dispatch
export default toDos
