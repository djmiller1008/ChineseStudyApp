import React from 'react';
import { Link } from 'react-router-dom'
import "../../assets/navbar.scss";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();        
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {
      email: 'demo@demo.com',
      password: 'demopassword'
    };

    this.props.login(user);
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <nav className='logged-in-sub-nav'>
                <nav className='links-nav'>
                  <Link to={'/search'}>Search</Link>
                  <Link to={'/diary'}>Diary</Link>
                  <Link to={'/quiz'}>Quiz</Link>
                </nav>
                <button onClick={this.logoutUser}>Logout</button>
            </nav>
        );
      } else {
        return (
            <nav className='logged-out-sub-nav'>
                <button onClick={this.handleDemo} className='demo-button'>Demo</button>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </nav>
        );
      }
  }

  render() {
      return (
        <header>
          <nav className='main-navbar'>
              <h1>ChineseHelper</h1>
              { this.getLinks() }
          </nav>
        </header>
      );
  }
}

export default NavBar;