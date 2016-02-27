import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class LeftNavUndockExample extends React.Component {

  render() {
  	const { global, handleToggle } = this.props
    return (
      <div>
      	<LeftNav
      	  docked={false}
      	  width={200}
      	  open={global.isopen}
      	  onRequestChange={e => handleToggle("isopen", false)}
      	>
      	  <MenuItem onTouchTap={e => alert(e)}>Menu Item</MenuItem>
      	  <MenuItem onTouchTap={e => alert(e)}>Menu Item</MenuItem>
      	</LeftNav>
      </div>
    )
  }
}

export default LeftNavUndockExample