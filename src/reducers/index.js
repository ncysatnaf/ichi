import { combineReducers } from 'redux'
import { HANDLE_TOGGLE_CHANGE } from '../actions/index'

function global(state = { isopen: false }, action) {
	switch (action.type) {
		case HANDLE_TOGGLE_CHANGE:
			return Object.assign({}, state, {
				isopen: action.data.isopen
			})
		default:
			return state
	}
}

function todos(state = [],action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state, {
				text: action.text,
				completed: false
			}]
		case COMPLETE_TODO:
			return [
			...state.slice(0, action.index),
			Object.assign({}, state[action.index], {
				completed: true
			}),
			...state.slice(action.index + 1)
			]
		default:
			return state
	}
}

function visibilityFilter( state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.fliter
		default:
			return state
	}
}



const rootReducer = combineReducers({
	global,
	todos,
	visibilityFilter
})

export default rootReducer
