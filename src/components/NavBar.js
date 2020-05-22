import React, { Component } from 'react'
import {
	Navbar,
	Nav,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
	state = {
		isNavOpen: false,
	}

	toggleNav = () => {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		})
	}
	render() {
		return (
			<React.Fragment>
				<Navbar
					className='navbar-light'
					
					// style={{ backgroundColor: this.props.bgColor, borderRadius: '2px' }}
					expand='sm'
				>
					<div className='container'>
						<NavbarBrand className='mr-auto' href='/'>
							Cipher Schools
						</NavbarBrand>
						<NavbarToggler
							onClick={this.toggleNav}
							className='ml-auto'
							style={{ outline: 'none' }}
						/>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav className='ml-auto' navbar>
								
								<NavItem className='ml-auto mr-auto'>
									<NavLink
										className='nav-link'
										to='/sign-in'
                                        style={{ color: this.props.itemColor }}
                                        onClick={this.toggleNav}
									>
										SignIn
									</NavLink>
								</NavItem>
								<NavItem className='ml-auto mr-auto'>
									<NavLink
										className='nav-link'
										to='/sign-up'
                                        style={{ color: this.props.itemColor }}
                                        onClick={this.toggleNav}
									>
										SignUp
									</NavLink>
								</NavItem>
								{localStorage.getItem('isAdmin') === 'true' ? <NavItem className='ml-auto mr-auto'>
									<NavLink
										className='nav-link'
										to='/admin'
                                        style={{ color: this.props.itemColor }}
                                        onClick={this.toggleNav}
									>
										Admin
									</NavLink>
								</NavItem>
								: null }

								
								
							</Nav>
							
						</Collapse>
					</div>
				</Navbar>
				
			</React.Fragment>
		)
	}
}
export default Header