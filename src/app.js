/* @jsx createElement */
import { createDOM, createElement, render } from './react'

function Title() {
  return <h1>React 만들기</h1>
}

const vdom = (
  <div>
    <Title />
    <p>
      <span>React 만들기2</span>
    </p>
  </div>
)

render(vdom, document.querySelector('#root'))
