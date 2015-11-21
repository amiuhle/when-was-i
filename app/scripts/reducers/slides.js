import { NEXT_SLIDE, PREV_SLIDE, NEXT_HINT, PREV_HINT } from '../constants/ActionTypes'

const initialState = {
  slide: 0,
  hint: 3
}

export default function slides (state = initialState, action) {
  switch (action.type) {
    case NEXT_SLIDE:
      return {
        slide: state.slide + 1,
        hint: 0
      }
    case PREV_SLIDE:
      return {
        slide: state.slide - 1,
        hint: 0
      }
    case NEXT_HINT:
      return {
        slide: state.slide,
        hint: state.hint + 1
      }
    case PREV_HINT:
      return {
        slide: state.slide,
        hint: state.hint - 1
      }
    default:
      return state
  }
}
