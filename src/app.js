import { createStore, actionCreator } from './redux'
import { reducer } from './reducer'
import * as Actions from './actions.js'

const store = createStore(reducer)

store.subscribe(function () {
  console.log('subscribe => ', store.getState())
})

store.dispatch(Actions.increase())

console.log('dispatch => ', store.getState())

store.dispatch(Actions.increase())

console.log('dispatch => ', store.getState())

store.dispatch(Actions.decrease())

console.log('dispatch => ', store.getState())

store.dispatch(Actions.reset())

// 코드 흐름대로 동기적으로 코드가 실행된다
// 리듀서에서 비동기 작업을 할 수 없다
