export function createStore(worker) {
  let state
  let handlers = []

  function send(action) {
    state = worker(state, action) / handlers.forEach(handler => handler())
  }

  function subscribe(handler) {
    handlers.push(handler)
  }

  function getState() {
    return state
  }

  return {
    send,
    getState,
    subscribe,
  }
}
