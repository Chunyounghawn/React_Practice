const CHANGE_DND = "CHANGE_DND" as const

export const change_dnd = (
  destination: any,
  draggableId: string,
  source: number
) => ({
  type: CHANGE_DND,
  default: { destination, draggableId, source },
})

type change_dnd_action = ReturnType<typeof change_dnd>

type dndState = {
  default: { [key: string]: string[] }
  destination: any
  draggableId: string
  source: number
}

const initialState: dndState = {
  default: {
    toDos: ["a", "b", "c"],
    doing: ["d", "e", "f"],
    done: ["z"],
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
      state.default.doing.splice(action.default.source, 1)
      state.default.doing.splice(
        action.default.destination.index,
        0,
        action.default.draggableId
      )
      console.log("aa")

      console.log(action.default.destination.droppableId)

      return state

    default:
      console.log("ss")

      console.log(state.default)
      return state
  }
}
export default toDos
