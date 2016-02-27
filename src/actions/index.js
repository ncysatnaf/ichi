import fetch from 'isomorphic-fetch'


//physical  --|====>  ))) interactions
export const HANDLE_TOGGLE_CHANGE = 'HANDLE_TOGGLE_CHANGE'

export function handleToggleChange(key, value) {
  return{
	type: HANDLE_TOGGLE_CHANGE,
	data: {
	  [key]: value
	}
  }
}

//magical  ----(*  ~~~~  logic
export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function completeTodo(index) {
	return {
		type: COMPLETE_TODO,
		index
	}
}

//rule  >---->  ||| Vision
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}









