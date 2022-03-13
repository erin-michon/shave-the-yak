import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header >
      <div className='p-4 pb-40 flex flex-row justify-between'>
        <Link to="/">
          <h1 className='p-4 text-lg tracking-wide'>USERNAME</h1>
        </Link>
        <h1 className='p-4 px-10 border rounded border-4 text-xl tracking-widest'>WELCOME TO SHAVE THE YAK!</h1>
        <nav className='p-4 text-lg tracking-wide'>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;