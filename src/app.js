function createStore() {
  let state

  function send() {
    state = worker(state) // worker가 새로운 객체로 overwrite
  }

  return {
    send,
  }
}

// 상태를 바꾸는 함수
function worker() {
  // 새로운 상태를 반환해야 한다
  // deep copy해서 참조를 끊어서 새로운 객체를 만들어야 한다는 뜻
  // 우선 depp copy되는 구조는 더 복잡하므로 spread 연산자로 얕은 복사로 진행
  return { ...state }
}

const store = createStore()

store.send()
// 1. store 안에 있는 send를 호출
// 2. worker 호출하여 state 전달
