// Dependencies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment, Container } from 'semantic-ui-react';

class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {activeItem: '/'};
		
		
	}


	handleItemClick (e, { name }) {
		this.setState({ activeItem: name });
	}

	render() {	

		const { activeItem } = this.state
		
		return(
		  <Menu fluid pointing secondary>
		    <Menu.Item name="Chris Leeson" active={activeItem === '/'} onClick={this.handleItemClick} as={NavLink} to="/" />
		    <Menu.Item icon="code" name="Work" active={activeItem === '/work'} onClick={this.handleItemClick} as={NavLink} to="/work" />
		    <Menu.Item icon="file text outline" name="Resume" active={activeItem === '/resume'} onClick={this.handleItemClick} as={NavLink} to="/resume" />
		    <Menu.Item icon="mail outline" name="Contact" active={activeItem === '/contact'} onClick={this.handleItemClick} as={NavLink} to="/contact" />
		  </Menu>
		);
	};	
}

export default Navbar;

