// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  TODO_LIST_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
  CHAT_PAGE_ROUTE,
} from '../routes';

export default class NavbarReactstrap extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => (
      { isOpen: prevState.isOpen }
    ));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={HOME_PAGE_ROUTE}>Home</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            {[
              { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
              { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
              { route: TODO_LIST_PAGE_ROUTE, label: 'Todo List' },
              { route: CHAT_PAGE_ROUTE, label: 'Chat' },
              { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404' },
            ].map(link => (
              <NavItem key={link.route}>
                <NavLink className="nav-link" to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
