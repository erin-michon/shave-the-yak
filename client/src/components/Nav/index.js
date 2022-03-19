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

  function refreshPage() {
    window.location.reload(true)
  }

  return (
    <header>
      <div className="sm:p-4 flex flex-auto flex-row justify-between font-medium">
        <nav onClick={refreshPage} className="p-4 text-lg sm:tracking-wide basis-1/4">

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
        <nav>
        <Link to="/">
          <h1 className="p-4 px-10 border shrink-1 rounded border-4 sm:text-3xl text-2xl sm:tracking-widest basis-1/2">
            SHAVE THE YAK!
          </h1>
        </Link>
        </nav>
        <nav className="p-4 text-lg text-right sm:tracking-wide basis-1/4">
          {Auth.loggedIn() ? (
            <>
              <Link to="/" onClick={logout} className="underline">Logout</Link>
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
