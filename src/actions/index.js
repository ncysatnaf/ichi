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
export const SELECT_TODO = "SELECT_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function completeTodo(index) {
	return {
		type: COMPLETE_TODO
	}
}

export function selectTodo(index) {
	return {
		type: SELECT_TODO,
		index
	}
}

//rule  >---->  ||| Vision
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
export const SET_INTITAL_OPTION = "SET_INTITAL_OPTION"

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export function setIntitalOption(key,value,parent){
	return {
	  type: SET_INTITAL_OPTION,
	  parent: parent,
	  data:{
	  	[key]: value
	  }
	}
}


export const LOAD_INITIAL_TODO = "LOAD_INITIAL_TODO"

export function loadInitialTodo (){
	let initialTodos = JSON.parse(window.localStorage.todos)
	return {
		type: LOAD_INITIAL_TODO,
		initialTodos
	}
}

