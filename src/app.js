import { createDOM } from './react'

const vdom = {
  tag: 'p',
  props: {},
  children: [
    {
      tag: 'span',
      props: {},
      children: ['React 만들어 보기'],
    },
  ],
}

document.querySelector('#root').appendChild(createDOM(vdom))
