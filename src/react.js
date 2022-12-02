export class Component {
  constructor(props) {
    this.props = props
  }
}

// 객체를 탐색하면서 real DOM을 만드는 메소드
export function createDOM(node) {
  // 문자열일 올 경우 예외처리
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }

  // createElement라는 DOM API를 통해서 만듦
  const element = document.createElement(node.tag)

  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  )

  // 자식요소가 있으면 재귀적으로 호출
  node.children.map(createDOM).forEach(element.appendChild.bind(element))
  // context가 깨지기 때문에 bind로 고정

  // 최종적으로 부모를 호출
  return element
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  }
}

export function createElement(tag, props, ...children) {
  props = props || {}

  if (typeof tag === 'function') {
    // 최초 컴포넌트일 경우에만 고려된 코드
    // 컴포넌트가 리렌더링 될 때마다 새로 인스턴스가 생성된다
    // 새로 인스턴스가 생성된 다는 것은 이전의 state 유지가 안되는 것
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children))
      return instance.render()
    } else {
      if (children.length > 0) {
        return tag(makeProps(props, children))
      } else {
        return tag(props)
      }
    }
  }

  return { tag, props, children }
}

// 즉시 실행 함수를 한 번 더 호출해서 render를 내부 함수에 넣어줌으로 인하여
// prevDOM이 클로저에 갇혀서 바깥에선 참조할 수 없게 된다.
export const render = (function () {
  let prevDom = null

  return function (vdom, container) {
    // 최초 DOM이 들어올 때
    if (prevDom === null) {
      prevDom = vdom
    }

    // diff
    // 새로운 DOM과 prevDOM을 객체 수준에서 비교를 해서 변경사항 부분만 real Dom에 업데이트
    container.appendChild(createDOM(vdom))
  }
})()
