import { createDOM, createElement, render } from './react'

const vdom = createElement(
  'p',
  {},
  createElement('span', { style: 'color: blue' }, 'React 만들기')
)

render(vdom, document.querySelector('#root'))
