function createStore() {
  let state
  let handlers = []

  function send() {
    state = worker(state) // worker가 새로운 객체로 overwrite

    handlers.forEach(handler => handler())
  }

  // 데이터가 바뀔 때마다 호출되는 구독기
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

// 상태를 바꾸는 함수
function worker(state = { count: 0 }) {
  // 새로운 상태를 반환해야 한다
  // deep copy해서 참조를 끊어서 새로운 객체를 만들어야 한다는 뜻
  // 우선 depp copy되는 구조는 더 복잡하므로 spread 연산자로 얕은 복사로 진행
  return { ...state, count: state.count + 1 }
}

const store = createStore(worker)

store.subscribe(function () {
  console.log(store.getState())
})

store.send()
store.send()

// 1. store의 subscribe에 함수 인자 전달
// 2. 핸들러 배열에 그 함수 인자 추가
// 3. send 함수 내에 worker에서 상태 업데이트
// 4. 핸들러 배열에서 함수 핸들러 실행
// 5. getState를 통해 업데이트 된 상태값 반환
// 6. 콘솔 로그 출력
