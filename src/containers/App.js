import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import AppBarExampleMenu from '../components/AppBarExampleMenu'
import LeftNavUndockExample from '../components/LeftNavUndockExample'
import { handleToggleChange, addTodo, selectTodo, setIntitalOption, completeTodo } from '../actions/index'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Todo from '../components/Todo'

injectTapEventPlugin()

class App extends Component {
  constructor(props){
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
    this.handleRowSelection = this.handleRowSelection.bind(this)
    this.handleAction = this.handleAction.bind(this)
  }

  handleToggle(key, value){
    this.props.dispatch(handleToggleChange(key, value))
  }
  handleKeydown(text){
    this.props.dispatch(addTodo(text))
  }
  handleRowSelection(index){
    this.props.dispatch(selectTodo(index))
  }
  handleAction(){
    this.props.dispatch(completeTodo())
  }

  render() {
    const { global, todos, interaction } = this.props
    return (
      <div>
        <AppBarExampleMenu global= {global} handleToggle={this.handleToggle}/>
        <LeftNavUndockExample global= {global} handleToggle={this.handleToggle}/>
        <Todo todos={todos} global= {global} interaction= {interaction} handleKeydown={this.handleKeydown} handleRowSelection={this.handleRowSelection} handleAction={this.handleAction}/>
      </div>
      )
  }
}


function mapStateToProps(state,props) {
  const { global, todos, interaction } = state
  return {
    global,
    todos,
    interaction
  }
}


export default connect(mapStateToProps)(App)
