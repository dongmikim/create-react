/* @jsx createElement */
import { createElement, render, Component } from './react'

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>
  }
}

const App = () => (
  <div>
    <Title>React 만들기</Title>
  </div>
)

render(<App />, document.querySelector('#root'))
