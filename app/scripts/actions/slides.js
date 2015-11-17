import * as types from '../constants/ActionTypes'

export function nextSlide(e) {
	return { type: types.NEXT_SLIDE }
}

export function nextHint(e) {
	return { type: types.NEXT_HINT }
}
