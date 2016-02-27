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

const rootReducer = combineReducers({
	global
})

export default rootReducer
