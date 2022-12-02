import { actionCreator } from './redux'
import { INCREASE } from './action-type'

export const increase = () => actionCreator(INCREASE)
