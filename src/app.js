/* @jsx createElement */
import { createElement, render } from './react'

function Title(props) {
  return <h1>{props.children}</h1>
}

const App = () => (
  <div>
    <Title>React 만들기</Title>
  </div>
)

render(<App />, document.querySelector('#root'))
