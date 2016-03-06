import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import AppBarExampleMenu from '../components/AppBarExampleMenu'
import LeftNavUndockExample from '../components/LeftNavUndockExample'
import { handleToggleChange, addTodo, selectTodo, setIntitalOption, completeTodo, loadInitialTodo } from '../actions/index'
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
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  componentDidMount(){
    const {tag} = this.props
    this.props.dispatch(loadInitialTodo(tag))
  }

  handleTouchTap(refs){
    const tag = refs.props.tag
    this.props.dispatch(loadInitialTodo(tag))
    this.props.dispatch(handleToggleChange("isopen", false))
  }
  handleToggle(key, value){
    this.props.dispatch(handleToggleChange(key, value))
  }
  handleKeydown(refs,e){
    e.preventDefault()
    const {tag} = this.props
    const text = e.target.value
    console.log(e.target)
    this.props.dispatch(addTodo(text, tag))
    e.target.value = ''
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
        <LeftNavUndockExample global= {global} handleToggle={this.handleToggle} handleTouchTap={this.handleTouchTap}/>
        <Todo todos={todos} global= {global} interaction= {interaction} handleKeydown={this.handleKeydown} handleRowSelection={this.handleRowSelection} handleAction={this.handleAction}/>
      </div>
      )
  }
}


function mapStateToProps(state,props) {
  const { global, todos, interaction } = state
  const tag = global.tag
  if(todos){
    window.localStorage.setItem(tag, JSON.stringify(todos))
  }
  return {
    global,
    todos,
    interaction,
    tag
  }
}


export default connect(mapStateToProps)(App)
