import { createDOM, render } from './react'

const vdom = {
  tag: 'p',
  props: {},
  children: [
    {
      tag: 'span',
      props: {
        style: 'color: red',
      },
      children: ['React 만들어 보기'],
    },
  ],
}

render(vdom, document.querySelector('#root'))
