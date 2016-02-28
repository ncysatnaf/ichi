import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field'
import Snackbar from 'material-ui/lib/snackbar'
import Table from 'material-ui/lib/table/table'
import TableRow from 'material-ui/lib/table/table-row'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import Popover from 'material-ui/lib/popover/popover'

export default class Todo extends React.Component {
  
  render() {
  	const { handleKeydown, handleRowSelection, todos, interaction, handleAction } = this.props
  	const SnackbarBox = [
  	  {filter: "xianyu", message:"你目前的状态为: 咸鱼", action:" "},
  	  {filter: "select", message:"选择完成的Todo", action:"完成"}
  	]

  	let CurrentSnackbar = SnackbarBox.map(function(o,i) {
  	  if (interaction.filter == o.filter){
		return(
		  <Snackbar open={true} message={o.message} action={o.action} onActionTouchTap={e => handleAction()}/>
		)
	  }
  	})

    return (
      <div>
        <TextField 
        ref="textField"
        floatingLabelText="Add Todo"
        fullWidth={true}
        onEnterKeyDown={e => handleKeydown(e.target.value)}/>
        <Table onCellClick={e => handleRowSelection(e)} multiSelectable={true} >
      	  <TableBody deselectOnClickaway={false}>
      		{todos.map(function(todo, i) {
      		  if (!todo.complete) {
      			return (
	          	<TableRow selected={todo.selected} key={i}>
	          	  <TableRowColumn>{todo.text}</TableRowColumn>
	          	</TableRow>
	          	)
      		  }
	        })}
      	  </TableBody>
        </Table>
        {CurrentSnackbar}
      </div>
    )
  }
}

export default Todo
