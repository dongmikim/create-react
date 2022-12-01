export function createDOM(node) {
  // 문자열일 올 경우 예외처리
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }

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

// ...가변인자
export function createElement(tag, props, ...children) {
  props = props || {}
  return { tag, props, children }
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom))
}
