function createStore() {
  let state
  let handlers = []

  function send(action) {
    state = worker(state, action) // worker가 새로운 객체로 overwrite

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
// 두번째 인자로 action 객체를 받는다 (리덕스의 컨벤션)
function worker(state = { count: 0 }, action) {
  // 액션이 많아지면 if문보단 스위치문이 나음
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + 1 }
    default:
      return { ...state }
  }
}

const store = createStore(worker)

store.subscribe(function () {
  console.log(store.getState())
})

// 액션은 어떤 형태로도 전달 가능하지만
// 리덕스는 type이라는 문자열 키는 꼭 전달하자고 컨벤션을 정함
store.send({ type: 'increase' })
store.send({ type: 'increase' })

// 1. store의 subscribe에 함수 인자 전달
// 2. 핸들러 배열에 그 함수 인자 추가
// 3. send 함수 내에 worker에서 상태 업데이트
// 4. 핸들러 배열에서 함수 핸들러 실행
// 5. getState를 통해 업데이트 된 상태값 반환
// 6. 콘솔 로그 출력
