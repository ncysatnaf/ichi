import fetch from 'isomorphic-fetch'

export const HANDLE_TOGGLE_CHANGE = 'HANDLE_TOGGLE_CHANGE'

export function handleToggleChange(key, value) {
  return{
	type: HANDLE_TOGGLE_CHANGE,
	data: {
	  [key]: value
	}
  }
}

