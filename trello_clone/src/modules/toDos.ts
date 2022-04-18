const CHANGE_DND = "CHANGE_DND" as const

export const change_dnd = (
  destination: number,
  draggableId: string,
  source: number
) => ({
  type: CHANGE_DND,
  destination,
  draggableId,
  source,
})

type change_dnd_action = ReturnType<typeof change_dnd>

type dndState = {
  toDos: Array<string>
  destination: number
  draggableId: string
  source: number
}

const initialState: dndState = {
  toDos: ["a", "b", "c", "d", "e", "f"],
  destination: 0,
  draggableId: "0",
  source: 0,
}

function toDos(
  state: dndState = initialState,
  action: change_dnd_action
): dndState {
  switch (action.type) {
    case CHANGE_DND:
      state.toDos.splice(action.source, 1)
      state.toDos.splice(action.destination, 0, action.draggableId)
      return state

    default:
      return state
  }
}
export default toDos
