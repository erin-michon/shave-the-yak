import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes 
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form 
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values 
    setFormState({
      email: '',
      password: ''
    });
  };

  return (
    <div className="flex justify-center text-white">
      <div className="p-4 border rounded border-4 bg-slate-600 bg-opacity-50 place-content-center">
        <Link to="/signup" className="underline">
          ← Go to Signup
        </Link>
        <h2 className="mt-4">Login Below</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <label htmlFor="email">Email address:</label>
            <input
              className="placeholder-gray-900 bg-slate-600 bg-opacity-50 border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="yacketyyak@donttalkback.com"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="pwd">Password:</label>
            <input
              className="placeholder-gray-900 bg-slate-600 bg-opacity-50 border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button type="submit" className='border-transparent rounded border-4 bg-slate-600 hover:bg-slate-800 py-1 px-2'>Submit</button>
          </div>
        </form>
        {error && <div>Login failed</div>}
      </div>
    </div>
  );
}

export default Login;
