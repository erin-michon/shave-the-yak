import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { capitalize } from '../../utils/helpers';

const Nav = () => {

  const { data: userData } = useQuery(QUERY_ME);
  const loggedIn = Auth.loggedIn();

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="p-4 pb-40 flex flex-row justify-between font-medium">
        <nav className="p-4 text-lg tracking-wide">

          {loggedIn && userData ? (
            <>
              <Link to="/myscores" className="underline">
              Welcome Back, {capitalize(userData.me.username)}!
              </Link>
            </>
          ) : (
            " "
          )}
        </nav>
        <Link to="/">
          <h1 className="p-4 px-10 border rounded border-4 text-3xl tracking-widest">
            SHAVE THE YAK!
          </h1>
        </Link>
        <nav className="p-4 text-lg tracking-wide">
          {Auth.loggedIn() ? (
            <>
              <a to="/" onClick={logout} className="underline">Logout</a>
            </>
          ) : (
            <>
              <Link to="/login" className="underline">Login</Link>
              &nbsp;&nbsp;
              <Link to="/signup" className="underline">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
