import { createStore } from './redux'

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + 1 }
    default:
      return { ...state }
  }
}

const store = createStore(reducer)

store.subscribe(function () {
  console.log(store.getState())
})

store.dispatch({ type: 'increase' })
store.dispatch({ type: 'increase' })
