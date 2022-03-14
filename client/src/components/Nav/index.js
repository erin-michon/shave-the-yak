import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <div className="p-4 pb-40 flex flex-row justify-between font-medium">
        <nav className="p-4 text-lg tracking-wide">
          <Link to="/" className="underline">
            USERNAME
          </Link>
        </nav>
        <h1 className="p-4 px-10 border rounded border-4 text-xl tracking-widest">
          WELCOME TO SHAVE THE YAK!
        </h1>
        <nav className="p-4 text-lg tracking-wide">
          <Link to="/login" className="underline">
            Login
          </Link>
          &nbsp;&nbsp;
          <Link to="/signup" className="underline">
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
