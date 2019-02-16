import React from 'react';
import { Link } from 'react-router-dom';

// import Modal from '../Modal';


const Header = () => {
  return (
    <div className="ui raised segment">
      <div className="ui secondary menu">
      <Link to='/' className="active item">Home</Link>
      <div className="right menu">
        <div className="ui active item">
          Login
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;