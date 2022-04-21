const CHANGE_DND = "CHANGE_DND" as const

export const change_dnd = (
  destination: number,
  draggableId: string,
  source: number
) => ({
  type: CHANGE_DND,
  default: { destination, draggableId, source },
})

type change_dnd_action = ReturnType<typeof change_dnd>

type dndState = {
  default: { [key: string]: string[] }
  destination: number
  draggableId: string
  source: number
}

const initialState: dndState = {
  default: {
    toDos: ["a", "b", "c", "d", "e", "f"],
    doing: ["a", "b", "c"],
    done: ["a"],
  },
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
      state.default.toDos.splice(action.default.source, 1)
      state.default.toDos.splice(
        action.default.destination,
        0,
        action.default.draggableId
      )
      return state

    default:
      return state
  }
}
export default toDos
