import * as types from '../constants/ActionTypes'

export function nextSlide () {
  return { type: types.NEXT_SLIDE }
}

export function prevSlide () {
  return { type: types.PREV_SLIDE }
}

export function nextHint () {
  return { type: types.NEXT_HINT }
}

export function prevHint () {
  return { type: types.PREV_HINT }
}
