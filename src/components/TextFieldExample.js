import React, { Component, PropTypes} from 'react'
import TextField from 'material-ui/lib/text-field'

export default class TextFieldExample extends React.Component {

  render() {
    return (
      <div>
      	<TextField 
      	  hintText="Add Todo"/>
      </div>
    )
  }
}
export default TextFieldExample