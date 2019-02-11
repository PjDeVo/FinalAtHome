import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavigationContainer extends Component {
  constructor() {
    super()
  }

  render() {


    return (
      <div className="nav-wrapper">

          <div className = 'nav-link-wrapper__home'>
            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
          </div>
          <div className = 'nav-link-wrapper__meet'>
            <NavLink to="/meet-the-instructors" activeClassName="nav-link-active">Instructors</NavLink>
          </div>
          <div className = 'nav-link-wrapper__kids'>
            <NavLink to="/kids" activeClassName="nav-link-active">Kids</NavLink>
          </div>
          <div className = 'nav-link-wrapper__schedule'>
            <NavLink to="/schedule" activeClassName="nav-link-active">Schedule</NavLink>
          </div>
          <div className = 'nav-link-wrapper__contact'>
            <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
          </div>
      </div>
    );
  }
}

export default NavigationContainer; 