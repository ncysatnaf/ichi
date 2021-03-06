import { combineReducers } from 'redux'
import { 
  HANDLE_TOGGLE_CHANGE, ADD_TODO, 
  COMPLETE_TODO, SET_VISIBILITY_FILTER,
  SELECT_TODO, SET_INTITAL_OPTION,
  LOAD_INITIAL_TODO} from '../actions/index'

function global(state = { isopen: false, tag: 'Work' }, action) {
	switch (action.type) {
		case HANDLE_TOGGLE_CHANGE:
			return Object.assign({}, state, {
				isopen: action.data.isopen
			})
		case LOAD_INITIAL_TODO:
			return Object.assign({}, state, {
				tag: action.tag
			})
		default:
			return state
	}
}

function todos(state = null ,action) {
	switch (action.type) {
		case LOAD_INITIAL_TODO:
			return action.initialTodos
		case ADD_TODO:
			return [...state, {
				text: action.text,
				selected: false,
				complete: false,
				tag: action.tag
			}]
		case SELECT_TODO:
			return [
			...state.slice(0, action.index),
			Object.assign({}, state[action.index], {
				selected: !state[action.index].selected
			}),
			...state.slice(action.index + 1)
			]
		case COMPLETE_TODO:
			return state.filter(todo => todo.selected === false)
		default:
			return state
	}
}

function  interaction( state={filter: null}, action) {
	switch (action.type) {
		case SELECT_TODO:
			return Object.assign({}, state, {
			  filter: "select"
			})
		case LOAD_INITIAL_TODO:
		  	return Object.assign({}, state, {
			  filter: action.filter
			})
		default:
			return state
	}
}

function visibilityFilter( state = {}, action) {
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
	visibilityFilter,
	interaction
})

export default rootReducer
