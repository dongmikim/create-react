import * as ActionType from './action-type'

export function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 1 }
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 }
    case ActionType.RESET:
      return { ...state, count: 0 }
    default:
      return { ...state }
  }
}
