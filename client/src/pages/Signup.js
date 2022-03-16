import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function Signup() {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [addUser, {error}] = useMutation(ADD_USER);

  // update state based on form input changes 
  const handleChange = (event) => {
    const{ name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      
    } catch (e) {
      console.error(e);
    }
   
  }

  return (
    <div className="flex justify-center text-white">
      <div className="p-4 border rounded border-4 bg-slate-600 bg-opacity-50 place-content-center">
        <Link to="/login" className="underline">
          ← Go to Login
        </Link>

        <h2 className="mt-4">Signup</h2>
        <form onSubmit={handleFormSubmit}> 
          <div className="mt-4">
            <label htmlFor="Username">Username:</label>
            <input
              className="placeholder-gray-900 bg-slate-600 bg-opacity-50 border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="shavetheyak"
              name="username"
              type="username"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email">Email:</label>
            <input
              className="placeholder-gray-900 bg-slate-600 bg-opacity-50 border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="noshave@november.com"
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
            <button
              type="submit"
              className="border-transparent rounded border-4 bg-slate-600 hover:bg-slate-800 py-1 px-2"
            >
              Submit
            </button>
          </div>

        </form>
        {error && <div>Signup failed </div>}
      </div>
    </div>
  );
}

export default Signup;
