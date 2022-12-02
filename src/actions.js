import { actionCreator } from './redux'
import { INCREASE } from './action-type'

// 함수로 반환, 액션 타입은 INCREASE 여기서 명시
export const increase = actionCreator(INCREASE)
