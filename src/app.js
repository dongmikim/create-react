/* @jsx createElement */
import { createDOM, createElement, render } from './react'

function Title(props) {
  return <h1>{props.children}</h1>
}

const vdom = (
  <div>
    <Title>React 만들기</Title>
    <p>
      <span>React 만들기2</span>
    </p>
  </div>
)

render(vdom, document.querySelector('#root'))
