import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class LeftNavUndockExample extends React.Component {

  render() {
  	const { global, handleToggle, handleTouchTap } = this.props
    return (
      <div>
      	<LeftNav
      	  docked={false}
      	  width={200}
      	  open={global.isopen}
      	  onRequestChange={e => handleToggle("isopen", false)}
      	>
      	  <MenuItem ref="Work" tag="Work" onTouchTap={() => handleTouchTap(this.refs.Work)}>Work</MenuItem>
      	  <MenuItem ref="Live" tag="Live" onTouchTap={() => handleTouchTap(this.refs.Live)}>Live</MenuItem>
      	</LeftNav>
      </div>
    )
  }
}

export default LeftNavUndockExample