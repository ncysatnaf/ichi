import React, { Component, PropTypes} from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class AppBarExampleMenu extends Component {

  render() {
  	const { handleToggle } = this.props
    return (
      <AppBar
	    title="Title"
	    onLeftIconButtonTouchTap={e => handleToggle("isopen", true)}
	    iconElementRight={
	      <IconMenu
	        iconButtonElement={
	          <IconButton><MoreVertIcon /></IconButton>
	        }
	        targetOrigin={{horizontal: 'right', vertical: 'top'}}
	        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	      >
	        <MenuItem primaryText="Refresh" />
	        <MenuItem primaryText="Help" />
	        <MenuItem primaryText="Sign out" />
	      </IconMenu>
	    }
	  />
	)
  }
}

export default AppBarExampleMenu