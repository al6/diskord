import React from 'react';
import { Link } from 'react-router-dom';

class AppButton extends React.Component {
  render(){
    const { currentMember } = this.props;
    if (currentMember) {
      return (
        <Link to={``} className="app-button">Open</Link>// /channels/@me
      )
    } else {
      return (
        <Link to={``} className="app-button">Login</Link>// /login
      )
    };
  }
}

export default AppButton;