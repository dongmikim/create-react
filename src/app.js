import { createStore, actionCreator } from './redux'
import { reducer } from './reducer'
import { INCREASE } from './action-type'

const store = createStore(reducer)

store.subscribe(function () {
  console.log(store.getState())
})

store.dispatch(actionCreator(INCREASE, 1))
store.dispatch(actionCreator(INCREASE))
