import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import AppBarExampleMenu from '../components/AppBarExampleMenu'
import LeftNavUndockExample from '../components/LeftNavUndockExample'
import { handleToggleChange } from '../actions/index'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class App extends Component {
  constructor(props){
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(key, value){
    this.props.dispatch(handleToggleChange(key, value))
  }

  render() {
    const { global } = this.props
    return (
      <div>
        <AppBarExampleMenu global= {global} handleToggle={this.handleToggle}/>
        <LeftNavUndockExample global= {global} handleToggle={this.handleToggle}/>
      </div>
      )
  }
}


function mapStateToProps(state,props) {
  const { global } = state
  return {
    global
  }
}


export default connect(mapStateToProps)(App)
