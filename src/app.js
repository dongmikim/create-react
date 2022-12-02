import { createStore, actionCreator } from './redux'
import { reducer } from './reducer'
import { increase } from './actions.js'

const store = createStore(reducer)

store.subscribe(function () {
  console.log(store.getState())
})

store.dispatch(increase())
store.dispatch(increase())
