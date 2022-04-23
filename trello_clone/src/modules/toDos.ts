const CHANGE_DND = "CHANGE_DND" as const

export const change_dnd = (
  destinationId: string,
  destinationIndex: number,
  draggableId: string,
  sourceId: string,
  sourceIndex: number
) => ({
  type: CHANGE_DND,
  default: {
    destinationId,
    destinationIndex,
    draggableId,
    sourceId,
    sourceIndex,
  },
})

type change_dnd_action = ReturnType<typeof change_dnd>

type dndState = {
  default: { [key: string]: string[] }
  destinationId: string
  destinationIndex: number
  draggableId: string
  sourceId: string
  sourceIndex: number
}

const initialState: dndState = {
  default: {
    toDos: ["a", "b", "c"],
    doing: ["d", "e", "f"],
    done: ["z"],
  },
  destinationId: "",
  destinationIndex: 0,
  draggableId: "0",
  sourceId: "",
  sourceIndex: 0,
}

function toDos(
  state: dndState = initialState,
  action: change_dnd_action
): dndState {
  switch (action.type) {
    case CHANGE_DND:
      const sIDkey = action.default.sourceId
      const dIDkey = action.default.destinationId
      state.default[sIDkey].splice(action.default.sourceIndex, 1)
      state.default[dIDkey].splice(
        action.default.destinationIndex,
        0,
        action.default.draggableId
      )
      return state

    default:
      return state
  }
}
export default toDos
